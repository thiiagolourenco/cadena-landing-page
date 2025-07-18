import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const StyleTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FCF4F2',
      100: '#F3D6CD',
      200: '#EBBCAD',
      300: '#e9ab96ff',
      400: '#e9987dff',
      500: '#e78666ff',
      600: '#c9775eff',
      700: '#c9684bff',
      800: '#D1613E',
      900: '#220a03ff',
      950: '#000000ff',
    },
  },
  components: {
    menubar: {
      colorScheme: {
        light: {
          root: {
            padding: '1rem 2rem',
            background: '#FAF8F5',
          },
        },
      },
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
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '{primary.color}',
              hoverBackground: '{primary.hover.color}',
              activeBackground: '{primary.active.color}',
              borderColor: '{primary.color}',
              hoverBorderColor: '{primary.hover.color}',
              activeBorderColor: '{primary.active.color}',
              color: '{primary.contrast.color}',
              hoverColor: '{primary.contrast.color}',
              activeColor: '{primary.contrast.color}',
              focusRing: {
                color: '{primary.color}',
                shadow: 'none',
              },
            },
            secondary: {
              background: '{primary.900}',
              hoverBackground: '{primary.950}',
              borderColor: '{primary.900}',
              activeBackground: '{primary.950}',
              hoverBorderColor: '{primary.950}',
              activeBorderColor: '{primary.950}',
              color: '{primary.contrast.color}',
              hoverColor: '{primary.contrast.color}',
              activeColor: '{primary.contrast.color}',
              focusRing: {
                color: '{primary.900}',
                shadow: 'none',
              },
            },
          },
          link: {
            color: '{primary.900}',
            hoverColor: '{primary.900}',
            activeColor: '{primary.900}',
          },
        },
      },
    },
  },
});
