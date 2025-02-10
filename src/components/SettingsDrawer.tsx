
import { useState } from "react";
import { useSettings } from "@/store/settings";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Settings } from "lucide-react";

export function SettingsDrawer() {
  const { toast } = useToast();
  const {
    theme,
    language,
    licenseKey,
    dataDirectory,
    setTheme,
    setLanguage,
    setLicenseKey,
    setDataDirectory,
  } = useSettings();

  const [localLicenseKey, setLocalLicenseKey] = useState(licenseKey);
  const [localDataDirectory, setLocalDataDirectory] = useState(dataDirectory);

  const handleSave = () => {
    setLicenseKey(localLicenseKey);
    setDataDirectory(localDataDirectory);
    toast({
      title: language === 'ru' ? "Настройки сохранены" : "Settings saved",
      description: language === 'ru' ? "Все изменения успешно применены" : "All changes have been applied successfully",
    });
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md border border-input bg-transparent hover:bg-accent hover:text-accent-foreground">
          <Settings className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{language === 'ru' ? 'Настройки' : 'Settings'}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="licenseKey">
                  {language === 'ru' ? 'Лицензионный ключ' : 'License Key'}
                </Label>
                <Input
                  id="licenseKey"
                  value={localLicenseKey}
                  onChange={(e) => setLocalLicenseKey(e.target.value)}
                  placeholder={language === 'ru' ? 'Введите лицензионный ключ' : 'Enter license key'}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dataDirectory">
                  {language === 'ru' ? 'Папка для данных' : 'Data Directory'}
                </Label>
                <Input
                  id="dataDirectory"
                  value={localDataDirectory}
                  onChange={(e) => setLocalDataDirectory(e.target.value)}
                  placeholder={language === 'ru' ? 'Путь к папке для хранения данных' : 'Path to data storage folder'}
                />
              </div>

              <div className="space-y-2">
                <Label>{language === 'ru' ? 'Язык' : 'Language'}</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ru">Русский</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{language === 'ru' ? 'Тема' : 'Theme'}</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">{language === 'ru' ? 'Светлая' : 'Light'}</SelectItem>
                    <SelectItem value="dark">{language === 'ru' ? 'Темная' : 'Dark'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3 pb-4">
                <Button onClick={handleSave} className="flex-1">
                  {language === 'ru' ? 'Сохранить' : 'Save'}
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="flex-1">
                    {language === 'ru' ? 'Закрыть' : 'Close'}
                  </Button>
                </DrawerClose>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
