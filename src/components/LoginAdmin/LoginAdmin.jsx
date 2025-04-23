import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import { Box } from '@mui/material';

const providers = [{ id: 'credentials', name: 'Email/Mobile' }];

const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY';

export default function LoginAdmin_Page() {
  const theme = useTheme();
  const recaptchaRef = React.useRef(null);

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={async (provider, formData) => {
          const token = formData.get('captchaToken');
          const emailOrMobile = formData.get('emailOrMobile');
          alert(
            `Signing in with "${provider.name}"\nEmail/Mobile: ${emailOrMobile}\nCAPTCHA Token: ${token}`,
          );
        }}
        providers={providers}
        slotProps={{
          emailField: {
            variant: 'standard',
            autoFocus: false,
            label: 'Email/Mobile:',
            name: 'emailOrMobile',
          },
        
          captcha: {
            children: (
              <Box sx={{ my: 2 }}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(value) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = 'captchaToken';
                    input.value = value || '';
                    input.setAttribute('data-custom-captcha', 'true');
                    document.querySelector('form')?.appendChild(input);
                  }}
                />
              </Box>
            ),
          },
          submitButton: { variant: 'outlined' },
        }}
      />
    </AppProvider>
  );
}
