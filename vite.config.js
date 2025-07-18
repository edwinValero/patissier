import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ghPages } from 'vite-plugin-gh-pages';
import decap from 'vite-plugin-decap-cms';

// https://vite.dev/config/
export default defineConfig({
  base: '/patissier/',
  publicDir: 'public',
  plugins: [
    react(),
    tailwindcss(),
    ghPages(),
    decap({
      config: {
        backend: {
          name: 'github',
          branch: 'main',
          repo: 'edwinValero/patissier',
          auth_type: 'implicit',
          app_id: 'Ov23liFmHxnLzpBHA6iF',
          auth_endpoint: 'auth',
        },
        media_folder: 'public/images/products',
        public_folder: '/images/products',
        collections: [
          {
            name: 'gallery',
            label: 'Product Gallery',
            files: [
              {
                file: 'src/data/products.json',
                label: 'Products',
                name: 'products',
                fields: [
                  {
                    label: 'Products',
                    name: 'products',
                    widget: 'list',
                    fields: [
                      { label: 'ID', name: 'id', widget: 'number' },
                      { label: 'Name', name: 'name', widget: 'string' },
                      { label: 'Image', name: 'imageUrl', widget: 'image' },
                      {
                        label: 'Seasonal',
                        name: 'isSeasonal',
                        widget: 'boolean',
                        default: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'menu',
            label: 'Menu',
            files: [
              {
                file: 'src/data/menu.json',
                label: 'Menu Categories',
                name: 'menu',
                fields: [
                  {
                    label: 'Drinks',
                    name: 'drinks',
                    widget: 'list',
                    fields: [
                      { label: 'Name', name: 'name', widget: 'string' },
                      {
                        label: 'Description',
                        name: 'description',
                        widget: 'string',
                      },
                      {
                        label: 'Is Title',
                        name: 'isTitle',
                        widget: 'boolean',
                        default: false,
                      },
                    ],
                  },
                  {
                    label: 'Crepes',
                    name: 'crepes',
                    widget: 'list',
                    fields: [
                      { label: 'Name', name: 'name', widget: 'string' },
                      {
                        label: 'Description',
                        name: 'description',
                        widget: 'string',
                      },
                      {
                        label: 'Is Title',
                        name: 'isTitle',
                        widget: 'boolean',
                        default: false,
                      },
                    ],
                  },
                  {
                    label: 'Ice Creams',
                    name: 'iceCreams',
                    widget: 'list',
                    fields: [
                      { label: 'Name', name: 'name', widget: 'string' },
                      {
                        label: 'Description',
                        name: 'description',
                        widget: 'string',
                      },
                      {
                        label: 'Is Title',
                        name: 'isTitle',
                        widget: 'boolean',
                        default: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});
