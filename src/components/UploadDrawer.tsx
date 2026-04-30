
import { CloudUpload } from 'lucide-react';
import { Button } from './Button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const UploadDrawer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-[25px] font-semibold text-black">Upload Files</DrawerTitle>
            <DrawerDescription className="text-[17px] font-semibold text-medium-gray">
              Drag and drop your files to submit.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col items-center justify-center p-[40px] border-2 border-dashed border-light-gray rounded-[20px] bg-off-white text-medium-gray text-center space-y-4 transition-colors hover:bg-[#F2F3F5]">
              <CloudUpload size={48} className="text-primary-indigo" />
              <p className="text-[17px] font-medium">Click or drag files here to upload</p>
            </div>
          </div>
          <DrawerFooter>
            <Button variant={1}>Submit</Button>
            <DrawerClose asChild>
              <Button variant={2}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
