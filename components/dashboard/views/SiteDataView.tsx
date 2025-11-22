import React, { useState, useEffect, useRef } from 'react';
import { PlusIcon, TrashIcon, PencilIcon, GripVerticalIcon, ChevronDownIcon, ImageIcon } from '../../Icons';
import type { SiteContent, NavLink, Sublink } from '../../../siteData';
import type { DashboardViewType } from '../../../types';


interface SiteDataViewProps {
  content: SiteContent;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
  onSave: () => Promise<boolean>;
  setActiveView: (view: DashboardViewType) => void;
  setEditingPage: (page: NavLink | Sublink) => void;
  setEditingPagePath: (path: string) => void;
}

const processImage = (file: File, options: { maxWidth: number; maxHeight: number; quality?: number; format?: 'jpeg' | 'png' }): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!file.type.startsWith('image/')) {
            return reject(new Error('File is not an image.'));
        }

        const reader = new FileReader();
        
        if (file.type === 'image/svg+xml') {
            reader.onload = (event) => {
                resolve(event.target?.result as string);
            };
            reader.onerror = (err) => reject(err);
            reader.readAsDataURL(file);
            return;
        }

        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let { width, height } = img;

                if (width > options.maxWidth || height > options.maxHeight) {
                    const ratio = Math.min(options.maxWidth / width, options.maxHeight / height);
                    width = Math.round(width * ratio);
                    height = Math.round(height * ratio);
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    return reject(new Error('Could not get canvas context'));
                }
                ctx.drawImage(img, 0, 0, width, height);

                const mimeType = `image/${options.format || 'jpeg'}`;
                const quality = options.quality || 0.85;
                const dataUrl = canvas.toDataURL(mimeType, mimeType.includes('jpeg') ? quality : undefined);
                resolve(dataUrl);
            };
            img.onerror = (err) => reject(err);
            img.src = event.target?.result as string;
        };
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
    });
};


const InputField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ label, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009688] focus:border-[#009688]" />
    </div>
);

const SelectField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: { value: string, label: string }[] }> = ({ label, value, onChange, options }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select value={value} onChange={onChange} className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009688] focus:border-[#009688]">
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
    </div>
);

const TextareaField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; rows?: number; }> = ({ label, value, onChange, rows = 5 }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} rows={rows} className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009688] focus:border-[#009688]" />
    </div>
);

const ImageUploadField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ label, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="flex items-center gap-4 mt-2">
            {value ? (
                <img src={value} alt="Preview" className="w-32 h-20 p-1 border rounded-md object-contain bg-white shadow-sm" />
            ) : (
                <div className="w-32 h-20 p-1 border rounded-md bg-gray-100 shadow-sm flex items-center justify-center">
                    <ImageIcon className="w-10 h-10 text-gray-400" />
                </div>
            )}
            <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009688]">
                <span>{value ? 'تغییر تصویر' : 'افزودن تصویر'}</span>
                <input type="file" className="sr-only" accept="image/png, image/jpeg, image/gif, image/webp, image/svg+xml" onChange={onChange} />
            </label>
        </div>
    </div>
);

const EditableImageField: React.FC<{
  label: string;
  value: string;
  description?: string;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageDelete: () => void;
}> = ({ label, value, description, onImageChange, onImageDelete }) => {
  if (!value) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {description && <p className="text-xs text-gray-500 -mt-1 mb-2">{description}</p>}
        <label className="cursor-pointer mt-2 w-full h-28 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 hover:border-[#009688] hover:text-[#009688] transition-all">
          <PlusIcon className="w-8 h-8" />
          <span className="text-sm font-medium mt-1">افزودن تصویر</span>
          <input type="file" className="sr-only" accept="image/png, image/jpeg, image/gif, image/webp" onChange={onImageChange} />
        </label>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {description && <p className="text-xs text-gray-500 -mt-1 mb-2">{description}</p>}
      <div className="p-2 border rounded-md bg-white">
        <img src={value} alt="Preview" className="w-full h-24 mb-2 rounded-md object-contain bg-gray-100" />
        <div className="flex justify-between items-center gap-2">
          <label className="flex-1 text-center cursor-pointer bg-white py-1.5 px-3 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-50">
            <span>تغییر</span>
            <input type="file" className="sr-only" accept="image/png, image/jpeg, image/gif, image/webp" onChange={onImageChange} />
          </label>
          <button onClick={onImageDelete} className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-1.5 px-3 border border-red-200 rounded-md shadow-sm text-xs font-medium flex items-center justify-center gap-1">
            <TrashIcon className="w-4 h-4" />
            <span>حذف</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const IconUploadField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ label, value, onChange }) => {
    const placeholderIconUri = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iI2E1YjRjZCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMi4yNSAxNS43NSA3LjUtNy41IDMgMy43NSA1LjI1LTZMMjEuNzUgMTIiIC8+PC9zdmc+';
    const isPlaceholder = value === placeholderIconUri || !value;

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="flex items-center gap-4 mt-2">
                {isPlaceholder ? (
                    <div className="w-16 h-16 p-1 border rounded-md bg-gray-100 shadow-sm flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                ) : (
                    <img src={value} alt="Icon Preview" className="w-16 h-16 p-1 border rounded-md object-contain bg-white shadow-sm" />
                )}
                <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009688]">
                    <span>{isPlaceholder ? 'افزودن آیکون' : 'تغییر آیکون'}</span>
                    <input type="file" className="sr-only" accept="image/png, image/jpeg, image/gif, image/webp, image/svg+xml" onChange={onChange} />
                </label>
            </div>
        </div>
    );
};

const AccordionSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden mb-4 transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-right bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div 
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                 <div className="overflow-hidden">
                    <div className="p-6 border-t border-gray-200">
                        {children}
                    </div>
                 </div>
            </div>
        </div>
    );
};

export const SiteDataView: React.FC<SiteDataViewProps> = ({ content, setContent, onSave, setActiveView, setEditingPage, setEditingPagePath }) => {
    const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
    const [activeSection, setActiveSection] = useState<string>('header');
    const mainContentRef = useRef<HTMLElement>(null);
    
    const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>({});
    
    const toggleCollapse = (path: string) => {
        setCollapsedItems(prev => ({ ...prev, [path]: !prev[path] }));
    };

    const InlineEditField: React.FC<{ value: string; onSave: (newValue: string) => void; isSublink?: boolean }> = ({ value, onSave, isSublink = false }) => {
        const [isEditing, setIsEditing] = useState(false);
        const [text, setText] = useState(value);
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (isEditing) {
                inputRef.current?.focus();
                inputRef.current?.select();
            }
        }, [isEditing]);

        const handleSave = () => {
            if (text.trim() === '') {
                setText(value); // Reset if empty
            } else {
                onSave(text);
            }
            setIsEditing(false);
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') handleSave();
            else if (e.key === 'Escape') {
                setText(value);
                setIsEditing(false);
            }
        };

        if (isEditing) {
            return (
                <input
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    className={`w-full px-2 py-1 bg-white border border-[#009688] rounded-md shadow-sm ${isSublink ? 'text-sm font-medium' : 'text-base font-semibold'}`}
                />
            );
        }

        return (
            <div onClick={() => setIsEditing(true)} className="group flex items-center gap-2 cursor-pointer p-1 -m-1 rounded-md hover:bg-gray-200/50 w-full">
                <span className={`${isSublink ? 'text-sm font-medium' : 'text-base font-semibold'} text-gray-800`}>{value}</span>
                <PencilIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        );
    };


    const placeholderIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iI2E1YjRjZCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMi4yNSAxNS43NSA3LjUtNy41IDMgMy43NSA1LjI1LTZMMjEuNzUgMTIiIC8+PC9zdmc+';

    const sections = [
        { id: 'header', title: 'منوی اصلی' },
        { id: 'hero', title: 'بخش Hero' },
        { id: 'clients', title: 'بخش مشتریان' },
        { id: 'features', title: 'امکانات اصلی' },
        { id: 'softwareShowcase', title: 'نمایی از نرم افزار' },
        { id: 'analytics', title: 'تحلیل و اهداف' },
        { id: 'stats', title: 'آمار' },
        { id: 'moreFeatures', title: 'امکانات بیشتر' },
        { id: 'about', title: 'درباره ما' },
        { id: 'footer', title: 'فوتر' },
        { id: 'retailPage', title: 'صفحه فروشگاهی' },
        { id: 'productsPage', title: 'صفحه محصولات' },
        { id: 'commercePage', title: 'صفحه بازرگانی' },
        { id: 'industrialPage', title: 'صفحه صنعتی' },
        { id: 'restaurantPage', title: 'صفحه رستورانی' },
        { id: 'hotelHallPage', title: 'صفحه هتل و تالار' },
        { id: 'taxpayerSystemPage', title: 'صفحه سامانه مودیان' },
        { id: 'payrollPage', title: 'صفحه حقوق و دستمزد' },
        { id: 'insurancePage', title: 'صفحه زیر سیستم بیمه' },
        { id: 'salaryDeductionPage', title: 'صفحه کسر از حقوق' },
        { id: 'orderRegistrationPage', title: 'صفحه ثبت سفارش' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        setActiveSection(sectionId);
    };

    const handleInputChange = (path: string, value: any) => {
        const keys = path.split('.');
        setContent(prev => {
            const newContent = JSON.parse(JSON.stringify(prev));
            let current: any = newContent;
            for (let i = 0; i < keys.length - 1; i++) {
                const key = keys[i];
                const arrayIndex = parseInt(key, 10);
                if (!isNaN(arrayIndex) && Array.isArray(current)) {
                    current = current[arrayIndex];
                } else if (current[key] === undefined || typeof current[key] !== 'object' || current[key] === null) {
                    current[key] = {};
                } else {
                    current = current[key];
                }
            }
            const lastKey = keys[keys.length - 1];
            const lastKeyIndex = parseInt(lastKey, 10);
            if (!isNaN(lastKeyIndex) && Array.isArray(current)) {
                current[lastKeyIndex] = value;
            } else {
                current[lastKey] = value;
            }
            return newContent;
        });
    };
    
    const handleImageChange = async (path: string, event: React.ChangeEvent<HTMLInputElement>, options: { maxWidth: number; maxHeight: number; format?: 'jpeg' | 'png' }) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            const compressedDataUrl = await processImage(file, {
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                format: options.format || 'jpeg',
                quality: 0.8,
            });
            handleInputChange(path, compressedDataUrl);
        } catch (error) {
            console.error(`Image processing failed for ${path}:`, error);
            alert('خطا در پردازش تصویر. لطفاً یک تصویر دیگر را امتحان کنید.');
        }
    };

    const handleSaveClick = async () => {
        setSaveState('saving');
        const success = await onSave();
        setSaveState(success ? 'saved' : 'error');
    };

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (saveState === 'saved' || saveState === 'error') {
            timer = setTimeout(() => setSaveState('idle'), 3000);
        }
        return () => clearTimeout(timer);
    }, [saveState]);

    const getButtonState = () => {
        switch (saveState) {
            case 'saving': return { text: 'در حال ذخیره...', disabled: true, className: 'bg-teal-400 cursor-not-allowed' };
            case 'saved': return { text: 'تغییرات اعمال شد', disabled: true, className: 'bg-green-600' };
            case 'error': return { text: 'خطا در ذخیره', disabled: false, className: 'bg-red-600 hover:bg-red-700 focus:ring-red-500' };
            default: return { text: 'ذخیره تغییرات', disabled: false, className: 'bg-[#009688] hover:bg-[#00796B] focus:ring-[#009688]' };
        }
    };
    const buttonState = getButtonState();

    const renderStandardPageEditor = (
        pageKey: string, 
        pageContent: any, 
        config: { challengesUseDescription?: boolean; featuresKey?: 'features' | 'modules' } = {}
    ) => {
        const { challengesUseDescription = false, featuresKey = 'features' } = config;
        const p = pageContent;

        return (
            <div>
                <AccordionSection title="بخش Hero" defaultOpen>
                    <ImageUploadField label="تصویر Hero" value={p?.hero?.imageUrl || ''} onChange={e => handleImageChange(`${pageKey}.hero.imageUrl`, e, { maxWidth: 1920, maxHeight: 1080 })} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label="نشان (Badge)" value={p?.hero?.badge || ''} onChange={e => handleInputChange(`${pageKey}.hero.badge`, e.target.value)} />
                        <InputField label="عنوان" value={p?.hero?.title || ''} onChange={e => handleInputChange(`${pageKey}.hero.title`, e.target.value)} />
                        <div className="md:col-span-2"><TextareaField label="زیر عنوان" value={p?.hero?.subtitle || ''} onChange={e => handleInputChange(`${pageKey}.hero.subtitle`, e.target.value)} rows={3} /></div>
                        <InputField label="دکمه اصلی" value={p?.hero?.ctaPrimary || ''} onChange={e => handleInputChange(`${pageKey}.hero.ctaPrimary`, e.target.value)} />
                        <InputField label="دکمه دوم" value={p?.hero?.ctaSecondary || ''} onChange={e => handleInputChange(`${pageKey}.hero.ctaSecondary`, e.target.value)} />
                    </div>
                </AccordionSection>

                <AccordionSection title={p?.challenges?.title ? `بخش: ${p.challenges.title}` : "بخش چالش‌ها"}>
                    <InputField label="عنوان بخش" value={p?.challenges?.title || ''} onChange={e => handleInputChange(`${pageKey}.challenges.title`, e.target.value)} />
                    <TextareaField label="زیر عنوان" value={p?.challenges?.subtitle || ''} onChange={e => handleInputChange(`${pageKey}.challenges.subtitle`, e.target.value)} rows={2}/>
                    <h4 className="text-md font-semibold text-gray-600 mt-4 mb-2">آیتم‌ها:</h4>
                    <div className="space-y-3">
                        {(p?.challenges?.items || []).map((item: any, index: number) => (
                            <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                <button onClick={() => handleInputChange(`${pageKey}.challenges.items`, p.challenges.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`${pageKey}.challenges.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                <InputField label="عنوان آیتم" value={item.title} onChange={e => handleInputChange(`${pageKey}.challenges.items.${index}.title`, e.target.value)} />
                                {challengesUseDescription ? (
                                    <TextareaField label="توضیحات" value={item.description} onChange={e => handleInputChange(`${pageKey}.challenges.items.${index}.description`, e.target.value)} rows={2} />
                                ) : (
                                    <TextareaField label="نکات (هر نکته در یک خط)" value={(item.points || []).join('\n')} onChange={e => handleInputChange(`${pageKey}.challenges.items.${index}.points`, e.target.value.split('\n'))} rows={3} />
                                )}
                            </div>
                        ))}
                    </div>
                    <button onClick={() => handleInputChange(`${pageKey}.challenges.items`, [...(p?.challenges?.items || []), { icon: placeholderIcon, title: 'چالش جدید', description: 'توضیحات...', points: [] }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن آیتم</span></button>
                </AccordionSection>
                
                <AccordionSection title={p?.[featuresKey]?.title ? `بخش: ${p[featuresKey].title}` : "امکانات/ماژول‌ها"}>
                    <InputField label="عنوان بخش" value={p?.[featuresKey]?.title || ''} onChange={e => handleInputChange(`${pageKey}.${featuresKey}.title`, e.target.value)} />
                    <h4 className="text-md font-semibold text-gray-600 mt-4 mb-2">آیتم‌ها:</h4>
                    <div className="space-y-3">
                        {(p?.[featuresKey]?.items || []).map((item: any, index: number) => (
                            <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                <button onClick={() => handleInputChange(`${pageKey}.${featuresKey}.items`, p[featuresKey].items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`${pageKey}.${featuresKey}.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                <InputField label="عنوان آیتم" value={item.title} onChange={e => handleInputChange(`${pageKey}.${featuresKey}.items.${index}.title`, e.target.value)} />
                                <TextareaField label="نکات (هر نکته در یک خط)" value={(item.points || []).join('\n')} onChange={e => handleInputChange(`${pageKey}.${featuresKey}.items.${index}.points`, e.target.value.split('\n'))} rows={3} />
                            </div>
                        ))}
                    </div>
                    <button onClick={() => handleInputChange(`${pageKey}.${featuresKey}.items`, [...(p?.[featuresKey]?.items || []), { icon: placeholderIcon, title: 'ویژگی جدید', points: ['نکته ۱'] }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن ویژگی</span></button>
                </AccordionSection>

                {p?.integrations && (
                    <AccordionSection title="بخش یکپارچه‌سازی">
                        <InputField label="عنوان" value={p?.integrations?.title || ''} onChange={e => handleInputChange(`${pageKey}.integrations.title`, e.target.value)} />
                        <TextareaField label="زیر عنوان" value={p?.integrations?.subtitle || ''} onChange={e => handleInputChange(`${pageKey}.integrations.subtitle`, e.target.value)} rows={2}/>
                        <h4 className="text-md font-semibold text-gray-600 mt-4 mb-2">آیتم‌ها:</h4>
                        <div className="space-y-3">
                            {(p?.integrations?.items || []).map((item: any, index: number) => (
                                <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                    <button onClick={() => handleInputChange(`${pageKey}.integrations.items`, p.integrations.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                    <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`${pageKey}.integrations.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                    <InputField label="نام" value={item.name} onChange={e => handleInputChange(`${pageKey}.integrations.items.${index}.name`, e.target.value)} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => handleInputChange(`${pageKey}.integrations.items`, [...(p?.integrations?.items || []), { icon: placeholderIcon, name: 'یکپارچگی جدید' }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن یکپارچگی</span></button>
                    </AccordionSection>
                )}
                
                <AccordionSection title="بخش جنبه‌های کلیدی">
                     <InputField label="عنوان بخش" value={p?.keyAspects?.title || ''} onChange={e => handleInputChange(`${pageKey}.keyAspects.title`, e.target.value)} />
                     <div className="space-y-4 mt-4">
                        {(p?.keyAspects?.items || []).map((item: any, index: number) => (
                             <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                <button onClick={() => handleInputChange(`${pageKey}.keyAspects.items`, p.keyAspects.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100" aria-label="حذف"><TrashIcon className="w-5 h-5" /></button>
                                <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`${pageKey}.keyAspects.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                <InputField label={`عنوان #${index + 1}`} value={item.title} onChange={e => handleInputChange(`${pageKey}.keyAspects.items.${index}.title`, e.target.value)} />
                                <TextareaField label="نکات (هر نکته در یک خط)" value={(item.points || []).join('\n')} onChange={e => handleInputChange(`${pageKey}.keyAspects.items.${index}.points`, e.target.value.split('\n'))} rows={5} />
                             </div>
                        ))}
                     </div>
                     <button onClick={() => handleInputChange(`${pageKey}.keyAspects.items`, [...(p?.keyAspects?.items || []), { icon: placeholderIcon, title: 'جنبه جدید', points: ['نکته ۱'] }])} className="w-full mt-4 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن جنبه کلیدی</span></button>
                </AccordionSection>
                
                <AccordionSection title="بخش فراخوان نهایی (CTA)">
                    <InputField label="عنوان" value={p?.finalCta?.title || ''} onChange={e => handleInputChange(`${pageKey}.finalCta.title`, e.target.value)} />
                    <TextareaField label="زیر عنوان" value={p?.finalCta?.subtitle || ''} onChange={e => handleInputChange(`${pageKey}.finalCta.subtitle`, e.target.value)} rows={2}/>
                    <InputField label="متن دکمه" value={p?.finalCta?.cta || ''} onChange={e => handleInputChange(`${pageKey}.finalCta.cta`, e.target.value)} />
                </AccordionSection>
            </div>
        );
    };


    const renderSectionContent = (id: string) => {
      switch(id) {
        case 'header':
            const get = (obj: any, path: string) => {
                return path.split('.').reduce((acc, key) => {
                    if (acc && typeof acc === 'object') {
                        return (acc as any)[key];
                    }
                    return undefined;
                }, obj);
            };

            const handleDeleteMenuItem = (path: string) => {
                const pathParts = path.split('.');
                const itemIndex = parseInt(pathParts.pop()!, 10);
                const parentPath = pathParts.join('.');
                
                const parentArray = get(content, parentPath);

                if (Array.isArray(parentArray)) {
                    const newArray = parentArray.filter((_, i) => i !== itemIndex);
                    handleInputChange(parentPath, newArray);
                }
            };

            const MenuEditorItem: React.FC<{
                item: NavLink | Sublink;
                path: string;
                onDelete: (path: string) => void;
            }> = ({ item, path, onDelete }) => {
                const isCollapsed = collapsedItems[path];
                const hasSublinks = item.sublinks && item.sublinks.length > 0;
            
                const handleAddSublink = () => {
                    const newSublink = { name: 'زیرمنوی جدید', href: '#', content: '' };
                    const newSublinks = [...(item.sublinks || []), newSublink];
                    handleInputChange(`${path}.sublinks`, newSublinks);
                };
            
                return (
                    <div className="border border-gray-200 rounded-lg bg-gray-50/50 transition-all duration-200">
                        <div className="flex items-start gap-3 p-4">
                            <div className="flex-grow">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 flex-grow">
                                        {hasSublinks && (
                                          <button onClick={() => toggleCollapse(path)} className="p-1 -mr-1 text-gray-400 hover:text-gray-700">
                                            <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}`} />
                                          </button>
                                        )}
                                        <InlineEditField
                                          value={item.name}
                                          onSave={newValue => handleInputChange(`${path}.name`, newValue)}
                                        />
                                    </div>
                                    <div className="flex items-center flex-shrink-0">
                                      <button onClick={handleAddSublink} className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-100 rounded-full transition-colors" title="افزودن زیرمنو"><PlusIcon className="w-5 h-5" /></button>
                                      <button onClick={() => onDelete(path)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-colors" title="حذف آیتم"><TrashIcon className="w-5 h-5" /></button>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-4 items-end mt-3`}>
                                    <InputField
                                      label="URL (لینک)"
                                      value={item.href}
                                      onChange={e => handleInputChange(`${path}.href`, e.target.value)}
                                    />
                                    <div className="mt-2 md:mt-0">
                                      {item.content && item.content.trim() !== '' && item.content.trim() !== '<p><br></p>' ? (
                                        <button 
                                          onClick={() => {
                                            setEditingPage(item);
                                            setEditingPagePath(path);
                                            setActiveView('pageEditor');
                                          }}
                                          className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium transition-colors border border-gray-300 shadow-sm"
                                        >
                                          <PencilIcon className="w-4 h-4" />
                                          <span>ادیتور صفحه</span>
                                        </button>
                                      ) : (
                                        (item.name !== "فروشگاهی" && item.name !== "محصولات" && item.name !== "بازرگانی" && item.name !== "صنعتی" && item.name !== "سامانه مودیان مالیاتی" && item.name !== "رستورانی" && item.name !== 'هتل و تالار' && item.name !== 'حقوق و دستمزد' && item.name !== 'زیر سیستم بیمه' && item.name !== 'زیر سیستم کسر از حقوق' && item.name !== 'زیر سیستم ثبت سفارش') &&
                                        <button
                                          onClick={() => {
                                            const newContent = '[]';
                                            const updatedItem = { ...item, content: newContent };
                                            handleInputChange(path, updatedItem);
                                            setEditingPage(updatedItem);
                                            setEditingPagePath(path);
                                            setActiveView('pageEditor');
                                          }}
                                          className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 text-sm font-medium transition-colors border border-blue-300 shadow-sm"
                                        >
                                          <PlusIcon className="w-4 h-4" />
                                          <span>ایجاد صفحه</span>
                                        </button>
                                      )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {hasSublinks && !isCollapsed && (
                            <div className="p-4 pl-0 pr-8 border-t border-gray-200">
                                <div className="space-y-3">
                                    {item.sublinks?.map((subItem, index) => (
                                        <MenuEditorItem
                                            key={index}
                                            item={subItem}
                                            path={`${path}.sublinks.${index}`}
                                            onDelete={onDelete}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            };

            return (
              <>
                <div className="space-y-4">
                  {(content.header?.navLinks || []).map((link, linkIndex) => (
                      <MenuEditorItem 
                          key={linkIndex}
                          item={link}
                          path={`header.navLinks.${linkIndex}`}
                          onDelete={handleDeleteMenuItem}
                      />
                  ))}
                </div>
                <button onClick={() => { const newLink = { name: 'لینک جدید', href: '#', content: '', sublinks: [] }; handleInputChange('header.navLinks', [...(content.header?.navLinks || []), newLink]); }} className="w-full mt-4 flex justify-center items-center gap-2 px-4 py-3 bg-white border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 hover:border-[#009688] hover:text-[#009688] transition-all duration-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن آیتم به منو</span></button>
              </>
            );
        case 'hero':
          return <>
            <ImageUploadField label="تصویر پس زمینه" value={content.hero?.backgroundImage || ''} onChange={e => handleImageChange('hero.backgroundImage', e, { maxWidth: 1920, maxHeight: 1080 })} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <EditableImageField 
                    label="تصویر شناور اصلی" 
                    value={content.hero?.heroImageMain || ''} 
                    description="پیشنهادی: 800x600px"
                    onImageChange={e => handleImageChange('hero.heroImageMain', e, { maxWidth: 800, maxHeight: 800 })} 
                    onImageDelete={() => handleInputChange('hero.heroImageMain', '')} 
                />
                <EditableImageField 
                    label="تصویر بزرگ ویترینی" 
                    value={content.hero?.heroImageShowcase || ''} 
                    description="پیشنهادی: 1280x800px"
                    onImageChange={e => handleImageChange('hero.heroImageShowcase', e, { maxWidth: 1280, maxHeight: 1280 })} 
                    onImageDelete={() => handleInputChange('hero.heroImageShowcase', '')} 
                />
                <EditableImageField 
                    label="تصویر شناور ۱" 
                    value={content.hero?.heroImageFloating1 || ''} 
                    description="پیشنهادی: 800x600px"
                    onImageChange={e => handleImageChange('hero.heroImageFloating1', e, { maxWidth: 800, maxHeight: 800 })} 
                    onImageDelete={() => handleInputChange('hero.heroImageFloating1', '')} 
                />
                <EditableImageField 
                    label="تصویر شناور ۲" 
                    value={content.hero?.heroImageFloating2 || ''} 
                    description="پیشنهادی: 800x600px"
                    onImageChange={e => handleImageChange('hero.heroImageFloating2', e, { maxWidth: 800, maxHeight: 800 })} 
                    onImageDelete={() => handleInputChange('hero.heroImageFloating2', '')} 
                />
                <EditableImageField 
                    label="تصویر شناور ۳" 
                    value={content.hero?.heroImageFloating3 || ''} 
                    description="پیشنهادی: 800x600px"
                    onImageChange={e => handleImageChange('hero.heroImageFloating3', e, { maxWidth: 800, maxHeight: 800 })} 
                    onImageDelete={() => handleInputChange('hero.heroImageFloating3', '')} 
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4"><InputField label="عنوان اصلی" value={content.hero?.title || ''} onChange={e => handleInputChange('hero.title', e.target.value)} /></div>
              <div className="mb-4"><InputField label="زیر عنوان" value={content.hero?.subtitle || ''} onChange={e => handleInputChange('hero.subtitle', e.target.value)} /></div>
              <div className="md:col-span-2"><TextareaField label="توضیحات" value={content.hero?.description || ''} onChange={e => handleInputChange('hero.description', e.target.value)} rows={3} /></div>
              <div className="mb-4"><InputField label="متن دکمه اصلی" value={content.hero?.cta_primary || ''} onChange={e => handleInputChange('hero.cta_primary', e.target.value)} /></div>
              <div className="mb-4"><InputField label="متن دکمه دوم" value={content.hero?.cta_secondary || ''} onChange={e => handleInputChange('hero.cta_secondary', e.target.value)} /></div>
            </div>
          </>
        case 'clients':
          return <>
            <div className="mb-4"><InputField label="عنوان" value={content.clients?.title || ''} onChange={e => handleInputChange('clients.title', e.target.value)} /></div>
            <div className="mb-4"><InputField label="زیر عنوان" value={content.clients?.subtitle || ''} onChange={e => handleInputChange('clients.subtitle', e.target.value)} /></div>
            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">لوگو مشتریان</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(content.clients?.logos || []).map((logo, index) => (
                <div key={index} className="relative group p-2 border rounded-md bg-white space-y-2">
                  <img src={logo.imageUrl} alt={logo.name} className="w-full h-16 object-contain" />
                  <button 
                    onClick={() => { 
                      const newLogos = (content.clients?.logos || []).filter((_, i) => i !== index); 
                      handleInputChange('clients.logos', newLogos); 
                    }} 
                    className="absolute top-1 right-1 bg-red-600/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" 
                    aria-label="حذف لوگو"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                  <InputField
                      label="لینک (URL)"
                      value={logo.url || ''}
                      onChange={e => handleInputChange(`clients.logos.${index}.url`, e.target.value)}
                  />
                </div>
              ))}
              <div>
                <label className="cursor-pointer w-full h-full min-h-[80px] flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 hover:border-[#009688] hover:text-[#009688] transition-all">
                  <PlusIcon className="w-6 h-6" />
                  <span className="text-sm font-medium mt-1">افزودن لوگو</span>
                  <input 
                    type="file" 
                    className="sr-only" 
                    accept="image/*" 
                    onChange={async e => { 
                      const file = e.target.files?.[0]; 
                      if (!file) return; 
                      try {
                          const base64String = await processImage(file, { maxWidth: 400, maxHeight: 200, format: 'png' });
                          const newLogo = { name: file.name || 'مشتری جدید', imageUrl: base64String, url: '' };
                          const newLogos = [...(content.clients?.logos || []), newLogo]; 
                          handleInputChange('clients.logos', newLogos); 
                      } catch (error) {
                          console.error('Error processing logo image:', error);
                          alert('خطا در پردازش تصویر لوگو.');
                      }
                      e.target.value = '';
                    }}
                  />
                </label>
              </div>
            </div>
          </>
        case 'features':
        case 'moreFeatures':
          const sectionKey = id as 'features' | 'moreFeatures';
          return <>
            <div className="mb-4"><InputField label="عنوان بخش" value={content[sectionKey]?.title || ''} onChange={e => handleInputChange(`${sectionKey}.title`, e.target.value)} /></div>
            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">لیست امکانات</h3>
            <div className="space-y-4">
              {(content[sectionKey]?.items || []).map((item, index) => (
                <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative pt-10">
                  <button onClick={() => { const newItems = (content[sectionKey]?.items || []).filter((_, i) => i !== index); handleInputChange(`${sectionKey}.items`, newItems); }} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 transition-colors p-1 rounded-full hover:bg-red-100" aria-label="Remove feature"><TrashIcon className="w-5 h-5" /></button>
                  <div className="mb-4"><InputField label={`عنوان ویژگی #${index + 1}`} value={item.title} onChange={e => { const newItems = [...(content[sectionKey]?.items || [])]; newItems[index].title = e.target.value; handleInputChange(`${sectionKey}.items`, newItems); }}/></div>
                  <div className="mb-4">
                    <IconUploadField label="آیکون" value={item.icon || ''} onChange={e => handleImageChange(`${sectionKey}.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                  </div>
                  <TextareaField label="نکات (هر نکته در یک خط مجزا)" value={item.points.join('\n')} onChange={e => { const newItems = [...(content[sectionKey]?.items || [])]; newItems[index].points = e.target.value.split('\n'); handleInputChange(`${sectionKey}.items`, newItems); }} rows={3}/>
                </div>
              ))}
            </div>
            <button onClick={() => { const newItem = { icon: placeholderIcon, title: 'ویژگی جدید', points: ['نکته ۱'] }; handleInputChange(`${sectionKey}.items`, [...(content[sectionKey]?.items || []), newItem]); }} className="w-full flex justify-center items-center gap-2 px-4 py-3 bg-white border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 hover:border-[#009688] hover:text-[#009688] transition-all duration-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن ویژگی</span></button>
          </>
        case 'softwareShowcase':
          return <>
            <div className="mb-4"><InputField label="عنوان" value={content.softwareShowcase?.title || ''} onChange={e => handleInputChange('softwareShowcase.title', e.target.value)} /></div>
            <div className="mb-4"><InputField label="زیر عنوان" value={content.softwareShowcase?.subtitle || ''} onChange={e => handleInputChange('softwareShowcase.subtitle', e.target.value)} /></div>
            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">اسلایدها</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(content.softwareShowcase?.slides || []).map((slideUrl, index) => (
                <div key={index} className="relative group p-2 border rounded-md bg-white">
                  <img src={slideUrl} alt={`Slide ${index + 1}`} className="w-full h-24 object-cover rounded" />
                  <button 
                    onClick={() => { 
                      const newSlides = (content.softwareShowcase?.slides || []).filter((_, i) => i !== index); 
                      handleInputChange('softwareShowcase.slides', newSlides); 
                    }} 
                    className="absolute top-1 right-1 bg-red-600/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" 
                    aria-label="حذف اسلاید"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <div>
                <label className="cursor-pointer w-full h-full min-h-[112px] flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 hover:border-[#009688] hover:text-[#009688] transition-all">
                  <PlusIcon className="w-6 h-6" />
                  <span className="text-sm font-medium mt-1">افزودن اسلاید</span>
                  <input 
                    type="file" 
                    className="sr-only" 
                    accept="image/*" 
                    onChange={async e => { 
                      const file = e.target.files?.[0]; 
                      if (!file) return; 
                      try {
                          const base64String = await processImage(file, { maxWidth: 1920, maxHeight: 1080 });
                          const newSlides = [...(content.softwareShowcase?.slides || []), base64String]; 
                          handleInputChange('softwareShowcase.slides', newSlides); 
                      } catch (error) {
                          console.error('Error processing slide image:', error);
                          alert('خطا در پردازش تصویر اسلاید.');
                      }
                      e.target.value = '';
                    }}
                  />
                </label>
              </div>
            </div>
          </>
        case 'analytics':
          return <>
            <ImageUploadField label="تصویر بخش تحلیل" value={content.analytics?.imageUrl || ''} onChange={e => handleImageChange('analytics.imageUrl', e, { maxWidth: 1280, maxHeight: 1280 })} />
            <div className="mb-4"><InputField label="عنوان اول" value={content.analytics?.title1 || ''} onChange={e => handleInputChange('analytics.title1', e.target.value)} /></div>
            <TextareaField label="پاراگراف اول" value={content.analytics?.paragraph1 || ''} onChange={e => handleInputChange('analytics.paragraph1', e.target.value)} />
            <div className="mb-4"><InputField label="عنوان دوم" value={content.analytics?.title2 || ''} onChange={e => handleInputChange('analytics.title2', e.target.value)} /></div>
            <TextareaField label="پاراگراف دوم" value={content.analytics?.paragraph2 || ''} onChange={e => handleInputChange('analytics.paragraph2', e.target.value)} />
            <div className="mb-4"><InputField label="متن دکمه" value={content.analytics?.cta || ''} onChange={e => handleInputChange('analytics.cta', e.target.value)} /></div>
          </>
        case 'stats':
          return <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="mb-4">
              <InputField label="مقدار تجربه" value={content.stats?.experience?.value || ''} onChange={e => handleInputChange('stats.experience.value', e.target.value)} />
              <InputField label="برچسب تجربه" value={content.stats?.experience?.label || ''} onChange={e => handleInputChange('stats.experience.label', e.target.value)} />
            </div>
            <div className="mb-4">
              <InputField label="مقدار مشتریان" value={content.stats?.customers?.value || ''} onChange={e => handleInputChange('stats.customers.value', e.target.value)} />
              <InputField label="برچسب مشتریان" value={content.stats?.customers?.label || ''} onChange={e => handleInputChange('stats.customers.label', e.target.value)} />
            </div>
            <div className="mb-4">
              <InputField label="مقدار تیم" value={content.stats?.team?.value || ''} onChange={e => handleInputChange('stats.team.value', e.target.value)} />
              <InputField label="برچسب تیم" value={content.stats?.team?.label || ''} onChange={e => handleInputChange('stats.team.label', e.target.value)} />
            </div>
            <div className="mb-4">
              <InputField label="مقدار رضایت" value={content.stats?.satisfaction?.value || ''} onChange={e => handleInputChange('stats.satisfaction.value', e.target.value)} />
              <InputField label="برچسب رضایت" value={content.stats?.satisfaction?.label || ''} onChange={e => handleInputChange('stats.satisfaction.label', e.target.value)} />
            </div>
          </div>
        case 'about':
          return <>
            <ImageUploadField label="تصویر درباره ما" value={content.about?.imageUrl || ''} onChange={e => handleImageChange('about.imageUrl', e, { maxWidth: 1024, maxHeight: 1024 })} />
            <div className="mb-4"><InputField label="عنوان" value={content.about?.title || ''} onChange={e => handleInputChange('about.title', e.target.value)} /></div>
            <TextareaField label="پاراگراف" value={content.about?.paragraph || ''} onChange={e => handleInputChange('about.paragraph', e.target.value)} rows={8} />
            <div className="mb-4"><InputField label="متن دکمه" value={content.about?.cta || ''} onChange={e => handleInputChange('about.cta', e.target.value)} /></div>
            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">گاه‌شمار تاریخچه</h3>
            <div className="space-y-4">
                {(content.about?.timeline || []).map((item, index) => (
                  <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative pt-10">
                    <button onClick={() => { const newItems = (content.about?.timeline || []).filter((_, i) => i !== index); handleInputChange('about.timeline', newItems); }} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 transition-colors p-1 rounded-full hover:bg-red-100" aria-label="Remove timeline event"><TrashIcon className="w-5 h-5" /></button>
                    <div className="mb-4"><InputField label="سال" value={item.year} onChange={e => { const newItems = [...(content.about?.timeline || [])]; newItems[index].year = e.target.value; handleInputChange('about.timeline', newItems); }}/></div>
                    <TextareaField label="توضیحات" value={item.description} onChange={e => { const newItems = [...(content.about?.timeline || [])]; newItems[index].description = e.target.value; handleInputChange('about.timeline', newItems); }} rows={2}/>
                  </div>
                ))}
            </div>
            <button onClick={() => { const newItem = { year: 'سال جدید', description: 'رویداد جدید.' }; handleInputChange('about.timeline', [...(content.about?.timeline || []), newItem]); }} className="mt-2 flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 text-sm font-medium"><PlusIcon className="w-5 h-5" /><span>افزودن رویداد</span></button>
          </>
        case 'footer':
          return <>
            <TextareaField label="توضیحات کوتاه" value={content.footer?.description || ''} onChange={e => handleInputChange('footer.description', e.target.value)} rows={3}/>
            <div className="mb-4"><InputField label="عنوان تماس با ما" value={content.footer?.contact?.title || ''} onChange={e => handleInputChange('footer.contact.title', e.target.value)} /></div>
            <div className="mb-4"><InputField label="شماره تماس" value={content.footer?.contact?.phone || ''} onChange={e => handleInputChange('footer.contact.phone', e.target.value)} /></div>
            <div className="mb-4"><InputField label="ایمیل" value={content.footer?.contact?.email || ''} onChange={e => handleInputChange('footer.contact.email', e.target.value)} /></div>
            <div className="mb-4"><InputField label="متن کپی‌رایت" value={content.footer?.copyright || ''} onChange={e => handleInputChange('footer.copyright', e.target.value)} /></div>
          </>
        case 'retailPage':
            return renderStandardPageEditor('retailPage', content.retailPage, { challengesUseDescription: false });
        case 'commercePage':
            return renderStandardPageEditor('commercePage', content.commercePage, { challengesUseDescription: true, featuresKey: 'modules' });
        case 'industrialPage':
            return renderStandardPageEditor('industrialPage', content.industrialPage, { challengesUseDescription: true, featuresKey: 'modules' });
        case 'restaurantPage':
            return renderStandardPageEditor('restaurantPage', content.restaurantPage, { challengesUseDescription: true });
        case 'hotelHallPage':
            return renderStandardPageEditor('hotelHallPage', content.hotelHallPage, { challengesUseDescription: true });
        case 'taxpayerSystemPage':
            return renderStandardPageEditor('taxpayerSystemPage', content.taxpayerSystemPage, { challengesUseDescription: true });
        case 'payrollPage':
            return renderStandardPageEditor('payrollPage', content.payrollPage, { challengesUseDescription: true });

        case 'productsPage':
            const pp = content.productsPage;
            return (
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">اطلاعات کلی صفحه</h3>
                        <InputField label="عنوان اصلی صفحه" value={pp?.title || ''} onChange={e => handleInputChange('productsPage.title', e.target.value)} />
                        <TextareaField label="متن مقدمه" value={pp?.intro || ''} onChange={e => handleInputChange('productsPage.intro', e.target.value)} rows={4} />
                    </div>
        
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">لیست محصولات</h3>
                        <div className="space-y-4">
                            {(pp?.products || []).map((product, index) => (
                                <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                    <button
                                        onClick={() => handleInputChange('productsPage.products', pp.products.filter((_, i) => i !== index))}
                                        className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"
                                        aria-label="حذف محصول"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <InputField
                                            label={`عنوان محصول #${index + 1}`}
                                            value={product.title}
                                            onChange={e => handleInputChange(`productsPage.products.${index}.title`, e.target.value)}
                                        />
                                        <IconUploadField
                                            label="آیکون"
                                            value={product.icon}
                                            onChange={e => handleImageChange(`productsPage.products.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })}
                                        />
                                        <div className="md:col-span-2">
                                            <TextareaField
                                                label="توضیحات محصول"
                                                value={product.description}
                                                onChange={e => handleInputChange(`productsPage.products.${index}.description`, e.target.value)}
                                                rows={3}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                             <InputField
                                                label="لینک (URL)"
                                                value={product.href}
                                                onChange={e => handleInputChange(`productsPage.products.${index}.href`, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => {
                                const newProduct = { icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iYmxhY2siPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEzLjUgMjF2LTcuNWEuNzUuNzUgMCAwMS43NS0uNzVoM2EuNzUuNzUgMCAwMS43NS43NVYyMW0tNC41IDBIMi4yNW0xMS4yNSAwaDguMjVhMi4yNSAyLjI1IDAgMDAtMi4yNS0yLjI1VjUuMjVBMi4yNSAyLjI1IDAgMDAyMC4yNSAzSDMuNzVBMi4yNSAyLjI1IDAgMDAxLjUgNS4yNXYxMy41QTIuMjUgMi4yNSAwIDAwMy43NSAyMW0xMS4yNSAwaC00LjUiIC8+PC9zdmc+", title: "محصول جدید", description: "توضیحات محصول جدید.", href: "#" };
                                handleInputChange('productsPage.products', [...(pp?.products || []), newProduct]);
                            }}
                            className="w-full mt-4 flex justify-center items-center gap-2 px-4 py-3 bg-white border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 hover:border-[#009688] hover:text-[#009688] transition-all duration-200 font-semibold"
                        >
                            <PlusIcon className="w-5 h-5" />
                            <span>افزودن محصول</span>
                        </button>
                    </div>
                </div>
            );
        case 'insurancePage':
            const insp = content.insurancePage;
            return (
                <div>
                     <AccordionSection title="بخش Hero" defaultOpen>
                        <ImageUploadField label="تصویر Hero" value={insp?.hero?.imageUrl || ''} onChange={e => handleImageChange('insurancePage.hero.imageUrl', e, { maxWidth: 1920, maxHeight: 1080 })} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="نشان (Badge)" value={insp?.hero?.badge || ''} onChange={e => handleInputChange('insurancePage.hero.badge', e.target.value)} />
                            <InputField label="عنوان" value={insp?.hero?.title || ''} onChange={e => handleInputChange('insurancePage.hero.title', e.target.value)} />
                            <div className="md:col-span-2"><TextareaField label="زیر عنوان" value={insp?.hero?.subtitle || ''} onChange={e => handleInputChange('insurancePage.hero.subtitle', e.target.value)} rows={3} /></div>
                            <InputField label="دکمه اصلی" value={insp?.hero?.ctaPrimary || ''} onChange={e => handleInputChange('insurancePage.hero.ctaPrimary', e.target.value)} />
                            <InputField label="دکمه دوم" value={insp?.hero?.ctaSecondary || ''} onChange={e => handleInputChange('insurancePage.hero.ctaSecondary', e.target.value)} />
                        </div>
                    </AccordionSection>
                    <AccordionSection title="بخش اهمیت">
                        <InputField label="عنوان بخش" value={insp?.importance?.title || ''} onChange={e => handleInputChange('insurancePage.importance.title', e.target.value)} />
                        <TextareaField label="آیتم‌ها (هر آیتم در یک خط)" value={(insp?.importance?.items || []).join('\n')} onChange={e => handleInputChange('insurancePage.importance.items', e.target.value.split('\n'))} rows={5} />
                    </AccordionSection>
                    <AccordionSection title="بخش امکانات">
                       <InputField label="عنوان بخش" value={insp?.features?.title || ''} onChange={e => handleInputChange('insurancePage.features.title', e.target.value)} />
                        <div className="space-y-4 mt-4">
                            {(insp?.features?.items || []).map((item: any, index: number) => (
                                <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                    <button onClick={() => handleInputChange('insurancePage.features.items', insp.features.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                    <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`insurancePage.features.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                    <InputField label="عنوان آیتم" value={item.title} onChange={e => handleInputChange(`insurancePage.features.items.${index}.title`, e.target.value)} />
                                    <TextareaField label="نکات (هر نکته در یک خط)" value={(item.points || []).join('\n')} onChange={e => handleInputChange(`insurancePage.features.items.${index}.points`, e.target.value.split('\n'))} rows={3} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => handleInputChange('insurancePage.features.items', [...(insp?.features?.items || []), { icon: placeholderIcon, title: 'ویژگی جدید', points: ['نکته ۱'] }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن ویژگی</span></button>
                    </AccordionSection>
                    <AccordionSection title="بخش یکپارچه‌سازی">
                       <InputField label="عنوان" value={insp?.integrations?.title || ''} onChange={e => handleInputChange('insurancePage.integrations.title', e.target.value)} />
                       <div className="space-y-3 mt-4">
                           {(insp?.integrations?.items || []).map((item: any, index: number) => (
                               <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                   <button onClick={() => handleInputChange('insurancePage.integrations.items', insp.integrations.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                   <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`insurancePage.integrations.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                   <InputField label="نام" value={item.name} onChange={e => handleInputChange(`insurancePage.integrations.items.${index}.name`, e.target.value)} />
                               </div>
                           ))}
                       </div>
                       <button onClick={() => handleInputChange('insurancePage.integrations.items', [...(insp?.integrations?.items || []), { icon: placeholderIcon, name: 'یکپارچگی جدید' }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن یکپارچگی</span></button>
                    </AccordionSection>
                    <AccordionSection title="بخش قابلیت‌های پیشرفته">
                        <InputField label="عنوان بخش" value={insp?.advancedFeatures?.title || ''} onChange={e => handleInputChange('insurancePage.advancedFeatures.title', e.target.value)} />
                        <TextareaField label="آیتم‌ها (هر آیتم در یک خط)" value={(insp?.advancedFeatures?.items || []).join('\n')} onChange={e => handleInputChange('insurancePage.advancedFeatures.items', e.target.value.split('\n'))} rows={5} />
                    </AccordionSection>
                     <AccordionSection title="بخش مخاطبین اصلی">
                        <InputField label="عنوان بخش" value={insp?.targetIndustries?.title || ''} onChange={e => handleInputChange('insurancePage.targetIndustries.title', e.target.value)} />
                        <div className="space-y-3 mt-4">
                           {(insp?.targetIndustries?.items || []).map((item: any, index: number) => (
                               <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                   <button onClick={() => handleInputChange('insurancePage.targetIndustries.items', insp.targetIndustries.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                   <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`insurancePage.targetIndustries.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                   <InputField label="نام" value={item.name} onChange={e => handleInputChange(`insurancePage.targetIndustries.items.${index}.name`, e.target.value)} />
                               </div>
                           ))}
                       </div>
                       <button onClick={() => handleInputChange('insurancePage.targetIndustries.items', [...(insp?.targetIndustries?.items || []), { icon: placeholderIcon, name: 'مخاطب جدید' }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن مخاطب</span></button>
                    </AccordionSection>
                    <AccordionSection title="بخش فراخوان نهایی (CTA)">
                        <InputField label="عنوان" value={insp?.finalCta?.title || ''} onChange={e => handleInputChange('insurancePage.finalCta.title', e.target.value)} />
                        <TextareaField label="زیر عنوان" value={insp?.finalCta?.subtitle || ''} onChange={e => handleInputChange('insurancePage.finalCta.subtitle', e.target.value)} rows={2}/>
                        <InputField label="متن دکمه" value={insp?.finalCta?.cta || ''} onChange={e => handleInputChange('insurancePage.finalCta.cta', e.target.value)} />
                    </AccordionSection>
                </div>
            );
        case 'salaryDeductionPage':
            const sdp = content.salaryDeductionPage;
            return (
                <div>
                     <AccordionSection title="بخش Hero" defaultOpen>
                        <ImageUploadField label="تصویر Hero" value={sdp?.hero?.imageUrl || ''} onChange={e => handleImageChange('salaryDeductionPage.hero.imageUrl', e, { maxWidth: 1920, maxHeight: 1080 })} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="نشان (Badge)" value={sdp?.hero?.badge || ''} onChange={e => handleInputChange('salaryDeductionPage.hero.badge', e.target.value)} />
                            <InputField label="عنوان" value={sdp?.hero?.title || ''} onChange={e => handleInputChange('salaryDeductionPage.hero.title', e.target.value)} />
                            <div className="md:col-span-2"><TextareaField label="زیر عنوان" value={sdp?.hero?.subtitle || ''} onChange={e => handleInputChange('salaryDeductionPage.hero.subtitle', e.target.value)} rows={3} /></div>
                            <InputField label="دکمه اصلی" value={sdp?.hero?.ctaPrimary || ''} onChange={e => handleInputChange('salaryDeductionPage.hero.ctaPrimary', e.target.value)} />
                            <InputField label="دکمه دوم" value={sdp?.hero?.ctaSecondary || ''} onChange={e => handleInputChange('salaryDeductionPage.hero.ctaSecondary', e.target.value)} />
                        </div>
                    </AccordionSection>
                    <AccordionSection title="بخش اهمیت">
                        <InputField label="عنوان بخش" value={sdp?.importance?.title || ''} onChange={e => handleInputChange('salaryDeductionPage.importance.title', e.target.value)} />
                        <TextareaField label="آیتم‌ها (هر آیتم در یک خط)" value={(sdp?.importance?.items || []).join('\n')} onChange={e => handleInputChange('salaryDeductionPage.importance.items', e.target.value.split('\n'))} rows={5} />
                    </AccordionSection>
                    <AccordionSection title="بخش امکانات">
                       <InputField label="عنوان بخش" value={sdp?.features?.title || ''} onChange={e => handleInputChange('salaryDeductionPage.features.title', e.target.value)} />
                        <div className="space-y-4 mt-4">
                            {(sdp?.features?.items || []).map((item: any, index: number) => (
                                <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                    <button onClick={() => handleInputChange('salaryDeductionPage.features.items', sdp.features.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                    <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`salaryDeductionPage.features.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                    <InputField label="عنوان آیتم" value={item.title} onChange={e => handleInputChange(`salaryDeductionPage.features.items.${index}.title`, e.target.value)} />
                                    <TextareaField label="نکات (هر نکته در یک خط)" value={(item.points || []).join('\n')} onChange={e => handleInputChange(`salaryDeductionPage.features.items.${index}.points`, e.target.value.split('\n'))} rows={3} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => handleInputChange('salaryDeductionPage.features.items', [...(sdp?.features?.items || []), { icon: placeholderIcon, title: 'ویژگی جدید', points: ['نکته ۱'] }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن ویژگی</span></button>
                    </AccordionSection>
                    <AccordionSection title="بخش یکپارچه‌سازی">
                       <InputField label="عنوان" value={sdp?.integrations?.title || ''} onChange={e => handleInputChange('salaryDeductionPage.integrations.title', e.target.value)} />
                       <div className="space-y-3 mt-4">
                           {(sdp?.integrations?.items || []).map((item: any, index: number) => (
                               <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                   <button onClick={() => handleInputChange('salaryDeductionPage.integrations.items', sdp.integrations.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                   <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`salaryDeductionPage.integrations.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                   <InputField label="نام" value={item.name} onChange={e => handleInputChange(`salaryDeductionPage.integrations.items.${index}.name`, e.target.value)} />
                               </div>
                           ))}
                       </div>
                       <button onClick={() => handleInputChange('salaryDeductionPage.integrations.items', [...(sdp?.integrations?.items || []), { icon: placeholderIcon, name: 'یکپارچگی جدید' }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن یکپارچگی</span></button>
                    </AccordionSection>
                    <AccordionSection title="بخش قابلیت‌های پیشرفته">
                        <InputField label="عنوان بخش" value={sdp?.advancedFeatures?.title || ''} onChange={e => handleInputChange('salaryDeductionPage.advancedFeatures.title', e.target.value)} />
                        <TextareaField label="آیتم‌ها (هر آیتم در یک خط)" value={(sdp?.advancedFeatures?.items || []).join('\n')} onChange={e => handleInputChange('salaryDeductionPage.advancedFeatures.items', e.target.value.split('\n'))} rows={5} />
                        <div className="mt-4 p-4 border-t border-gray-200">
                             <InputField label="عنوان مثال‌ها" value={sdp?.advancedFeatures?.examples?.title || ''} onChange={e => handleInputChange('salaryDeductionPage.advancedFeatures.examples.title', e.target.value)} />
                             <TextareaField label="مثال‌ها (هر مثال در یک خط)" value={(sdp?.advancedFeatures?.examples?.items || []).join('\n')} onChange={e => handleInputChange('salaryDeductionPage.advancedFeatures.examples.items', e.target.value.split('\n'))} rows={3} />
                        </div>
                    </AccordionSection>
                    <AccordionSection title="بخش فراخوان نهایی (CTA)">
                        <InputField label="عنوان" value={sdp?.finalCta?.title || ''} onChange={e => handleInputChange('salaryDeductionPage.finalCta.title', e.target.value)} />
                        <TextareaField label="زیر عنوان" value={sdp?.finalCta?.subtitle || ''} onChange={e => handleInputChange('salaryDeductionPage.finalCta.subtitle', e.target.value)} rows={2}/>
                        <InputField label="متن دکمه" value={sdp?.finalCta?.cta || ''} onChange={e => handleInputChange('salaryDeductionPage.finalCta.cta', e.target.value)} />
                    </AccordionSection>
                </div>
            );
        case 'orderRegistrationPage':
            const orp = content.orderRegistrationPage;
            return (
                <div>
                    <AccordionSection title="بخش Hero" defaultOpen>
                        <ImageUploadField label="تصویر Hero" value={orp?.hero?.imageUrl || ''} onChange={e => handleImageChange('orderRegistrationPage.hero.imageUrl', e, { maxWidth: 1920, maxHeight: 1080 })} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="نشان (Badge)" value={orp?.hero?.badge || ''} onChange={e => handleInputChange('orderRegistrationPage.hero.badge', e.target.value)} />
                            <InputField label="عنوان" value={orp?.hero?.title || ''} onChange={e => handleInputChange('orderRegistrationPage.hero.title', e.target.value)} />
                            <div className="md:col-span-2"><TextareaField label="زیر عنوان" value={orp?.hero?.subtitle || ''} onChange={e => handleInputChange('orderRegistrationPage.hero.subtitle', e.target.value)} rows={3} /></div>
                            <InputField label="دکمه اصلی" value={orp?.hero?.ctaPrimary || ''} onChange={e => handleInputChange('orderRegistrationPage.hero.ctaPrimary', e.target.value)} />
                            <InputField label="دکمه دوم" value={orp?.hero?.ctaSecondary || ''} onChange={e => handleInputChange('orderRegistrationPage.hero.ctaSecondary', e.target.value)} />
                        </div>
                    </AccordionSection>
                    <AccordionSection title="مقدمه و اهداف">
                        <TextareaField label="متن مقدمه" value={orp?.introduction || ''} onChange={e => handleInputChange('orderRegistrationPage.introduction', e.target.value)} rows={5} />
                        <div className="mt-4 p-4 border-t border-gray-200">
                             <InputField label="عنوان اهداف کلیدی" value={orp?.keyObjectives?.title || ''} onChange={e => handleInputChange('orderRegistrationPage.keyObjectives.title', e.target.value)} />
                             <TextareaField label="اهداف (هر هدف در یک خط)" value={(orp?.keyObjectives?.items || []).join('\n')} onChange={e => handleInputChange('orderRegistrationPage.keyObjectives.items', e.target.value.split('\n'))} rows={4} />
                        </div>
                    </AccordionSection>
                    <AccordionSection title="بخش امکانات">
                       <InputField label="عنوان بخش" value={orp?.features?.title || ''} onChange={e => handleInputChange('orderRegistrationPage.features.title', e.target.value)} />
                        <div className="space-y-4 mt-4">
                            {(orp?.features?.items || []).map((item: any, index: number) => (
                                <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                    <button onClick={() => handleInputChange('orderRegistrationPage.features.items', orp.features.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                    <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`orderRegistrationPage.features.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                    <InputField label="عنوان آیتم" value={item.title} onChange={e => handleInputChange(`orderRegistrationPage.features.items.${index}.title`, e.target.value)} />
                                    <TextareaField label="نکات (هر نکته در یک خط)" value={(item.points || []).join('\n')} onChange={e => handleInputChange(`orderRegistrationPage.features.items.${index}.points`, e.target.value.split('\n'))} rows={3} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => handleInputChange('orderRegistrationPage.features.items', [...(orp?.features?.items || []), { icon: placeholderIcon, title: 'ویژگی جدید', points: ['نکته ۱'] }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن ویژگی</span></button>
                    </AccordionSection>
                    <AccordionSection title="بخش یکپارچه‌سازی">
                       <InputField label="عنوان" value={orp?.integrations?.title || ''} onChange={e => handleInputChange('orderRegistrationPage.integrations.title', e.target.value)} />
                       <div className="space-y-3 mt-4">
                           {(orp?.integrations?.items || []).map((item: any, index: number) => (
                               <div key={index} className="p-4 border rounded-md bg-gray-50/50 relative">
                                   <button onClick={() => handleInputChange('orderRegistrationPage.integrations.items', orp.integrations.items.filter((_: any, i: number) => i !== index))} className="absolute top-2 left-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><TrashIcon className="w-5 h-5" /></button>
                                   <IconUploadField label="آیکون" value={item.icon} onChange={e => handleImageChange(`orderRegistrationPage.integrations.items.${index}.icon`, e, { maxWidth: 128, maxHeight: 128, format: 'png' })} />
                                   <InputField label="نام" value={item.name} onChange={e => handleInputChange(`orderRegistrationPage.integrations.items.${index}.name`, e.target.value)} />
                               </div>
                           ))}
                       </div>
                       <button onClick={() => handleInputChange('orderRegistrationPage.integrations.items', [...(orp?.integrations?.items || []), { icon: placeholderIcon, name: 'یکپارچگی جدید' }])} className="w-full mt-3 flex justify-center items-center gap-2 px-4 py-2 bg-green-100 border-2 border-dashed border-green-200 rounded-lg text-green-800 hover:bg-green-200 font-semibold"><PlusIcon className="w-5 h-5" /><span>افزودن یکپارچگی</span></button>
                    </AccordionSection>
                    <AccordionSection title="گزارش‌ها و مزایا">
                        <InputField label="عنوان گزارش‌ها" value={orp?.reports?.title || ''} onChange={e => handleInputChange('orderRegistrationPage.reports.title', e.target.value)} />
                        <TextareaField label="آیتم‌های گزارش (هر آیتم در یک خط)" value={(orp?.reports?.items || []).join('\n')} onChange={e => handleInputChange('orderRegistrationPage.reports.items', e.target.value.split('\n'))} rows={4} />
                        <div className="mt-4 p-4 border-t border-gray-200">
                           <InputField label="عنوان مزایا" value={orp?.benefits?.title || ''} onChange={e => handleInputChange('orderRegistrationPage.benefits.title', e.target.value)} />
                           <TextareaField label="مزایا (هر مزیت در یک خط)" value={(orp?.benefits?.items || []).join('\n')} onChange={e => handleInputChange('orderRegistrationPage.benefits.items', e.target.value.split('\n'))} rows={4} />
                        </div>
                    </AccordionSection>
                    <AccordionSection title="جمع‌بندی و فراخوان نهایی">
                        <TextareaField label="متن جمع‌بندی" value={orp?.summary || ''} onChange={e => handleInputChange('orderRegistrationPage.summary', e.target.value)} rows={4} />
                        <div className="mt-4 p-4 border-t border-gray-200">
                             <InputField label="عنوان فراخوان نهایی" value={orp?.finalCta?.title || ''} onChange={e => handleInputChange('orderRegistrationPage.finalCta.title', e.target.value)} />
                             <TextareaField label="زیرعنوان فراخوان نهایی" value={orp?.finalCta?.subtitle || ''} onChange={e => handleInputChange('orderRegistrationPage.finalCta.subtitle', e.target.value)} rows={2}/>
                             <InputField label="متن دکمه" value={orp?.finalCta?.cta || ''} onChange={e => handleInputChange('orderRegistrationPage.finalCta.cta', e.target.value)} />
                        </div>
                    </AccordionSection>
                </div>
            );
        default:
          return <div className="text-center p-8 bg-gray-100 rounded-lg"><p className="text-gray-500">ویرایشگر محتوای این صفحه هنوز پیاده‌سازی نشده است.</p></div>;
      }
    };
    
    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200 flex-shrink-0 z-10 shadow-sm">
                <h1 className="text-xl font-bold text-gray-800">ویرایش اطلاعات سایت</h1>
                <button
                    onClick={handleSaveClick}
                    disabled={buttonState.disabled}
                    className={`px-6 py-2 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${buttonState.className}`}
                >
                    {buttonState.text}
                </button>
            </header>

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-60 bg-white border-l border-gray-200 p-4 overflow-y-auto flex-shrink-0">
                    <nav>
                        <ul className="space-y-1">
                            {sections.map(section => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        onClick={e => handleNavClick(e, section.id)}
                                        className={`block w-full text-right px-3 py-2 text-sm rounded-md transition-colors ${
                                            activeSection === section.id
                                                ? 'bg-[#009688]/10 text-[#009688] font-semibold'
                                                : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Content Area */}
                <main ref={mainContentRef} className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-full mx-auto">
                        <AccordionSection title={sections.find(s => s.id === activeSection)?.title || ''} defaultOpen={true}>
                           {renderSectionContent(activeSection)}
                        </AccordionSection>
                    </div>
                </main>
            </div>
        </div>
    );
};