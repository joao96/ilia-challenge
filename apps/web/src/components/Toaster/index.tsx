import { Toaster } from 'react-hot-toast';

export function MyToaster() {
  return (
    <Toaster
      toastOptions={{
        duration: 2000,
        style: {
          minWidth: '150px',
          padding: '16px',
        },
        success: {
          icon: '🎉',
          style: {
            border: '2px solid #4BB543',
          },
        },
        error: {
          icon: '❌',
          style: {
            border: '2px solid #EA001E',
          },
        },
      }}
    />
  );
}
