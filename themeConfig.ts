import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    colorBgBase: '#ffffff',
    colorTextBase: '#222',
    colorBorder: '#d9d9d9',
    borderRadius: 8
  },
  components: {
    Button: {
      colorPrimary: '#20A8D8',
    },
    Select: {
      controlOutline: 'none',
    }
  }
};
