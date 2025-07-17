import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const StyleTheme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
    },
  },
  components: {
    menubar: {
      css: () => `
      .p-menubar {
        border: none;
        justify-content: flex-end;
      }

      .p-menubar-button {
        order: 3;
      }
      `,
    },
    card: {
      root: {
        borderRadius: '4px',
      },
      colorScheme: {
        light: {
          root: {
            background: '{indigo.400}',
          },
        },
        dark: {
          root: {
            background: '{slate.400}',
          },
        },
      },
    },
  },
});
