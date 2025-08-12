import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoadingButton } from '@/components/ui/loading-button';
import { PasswordInput } from '@/components/ui/password-input';

// keep these schema separate from components at feature level
const loginSchema = z.object({
  email: z.email({ message: 'Enter a valid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(_data: LoginFormValues) {
    try {
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 1200));
      // Handle success (e.g., redirect, show message)
      //   use sonner toast directly from sonner
      // Include Toaster in layout for it to work
    } catch {
      // Handle error (e.g., show error message)
      form.setError('root', {
        type: 'manual',
        //   for using server error message use utility function getErrorMessage
        message: 'Login failed. Please check your credentials.',
      });
    }
  }

  return (
    <Form {...form}>
      <form aria-label="Login form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  id="email"
                  required
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <PasswordInput
                  autoComplete="current-password"
                  id="password"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* usually this will be separate component that will be used inside every form  */}
        {form.formState.errors.root && (
          <div className="mt-2 text-red-500 text-sm">
            {form.formState.errors.root.message}
          </div>
        )}

        <LoadingButton isLoading={isSubmitting} type="submit">
          {/* Login :You can use static text or dynamic text both*/}
          {isSubmitting ? 'Logging in...' : 'Login'}
        </LoadingButton>
      </form>
    </Form>
  );
}
