
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
      title: "Настройки сохранены",
      description: "Все изменения успешно применены",
    });
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Открыть настройки</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Настройки</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="licenseKey">Лицензионный ключ</Label>
                <Input
                  id="licenseKey"
                  value={localLicenseKey}
                  onChange={(e) => setLocalLicenseKey(e.target.value)}
                  placeholder="Введите лицензионный ключ"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dataDirectory">Папка для данных</Label>
                <Input
                  id="dataDirectory"
                  value={localDataDirectory}
                  onChange={(e) => setLocalDataDirectory(e.target.value)}
                  placeholder="Путь к папке для хранения данных"
                />
              </div>

              <div className="space-y-2">
                <Label>Язык</Label>
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
                <Label>Тема</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Светлая</SelectItem>
                    <SelectItem value="dark">Темная</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3 pb-4">
                <Button onClick={handleSave} className="flex-1">
                  Сохранить
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="flex-1">
                    Закрыть
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
