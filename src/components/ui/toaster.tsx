import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, X } from 'lucide-react'; // Import the icons

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex items-center space-x-2">
              <div className="grid gap-1">
                <div className="flex items-center space-x-2">
                  {props.variant === 'success' && <CheckCircle className="h-4 w-4" />}
                  {title && <ToastTitle>{title}</ToastTitle>}
                </div>
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
            </div>
            {action}
            <ToastClose className="absolute right-2 top-2 rounded-md p-1 text-white opacity-100 transition-opacity hover:text-white/80 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2">
              <X className="h-4 w-4" />
            </ToastClose>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
