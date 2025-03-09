export const fileSystem = {
  locked: false,
  size: '580GB',
  type: 'folder',
  sub: {
    'Local Disk (C:)': {
      locked: false,
      size: '230GB',
      type: 'drive_ms',
      sub: {
        'Program Files': {
          locked: false,
          size: '50GB',
          type: 'folder',
          sub: {
            App1: { type: 'folder', size: '10MB', sub: {} },
            App2: { type: 'folder', size: '20MB', sub: {} },
            Utilities: {
              locked: false,
              type: 'folder',
              size: '30MB',
              sub: {
                Utility1: { type: 'exe', size: '5MB', sub: {} },
                Utility2: { type: 'file', size: '7MB', sub: {} },
              },
            },
          },
        },
        Users: {
          locked: false,
          size: '3.4GB',
          type: 'folder',

          sub: {
            'Bram Bekkers': {
              locked: false,
              size: '2.1GB',
              type: 'folder',
              sub: {
                Documents: {
                  locked: false,
                  size: '4MB',
                  type: 'folder',
                  sub: {
                    'Resume.docx': { type: 'docx', size: '1MB' },
                    'Project.txt': { type: 'txt', size: '3MB' },
                  },
                },
                Pictures: {
                  locked: false,
                  size: '3.5MB',
                  type: 'folder',
                  sub: {
                    'Holiday.jpg': { type: 'file_image', size: '2MB' },
                    'Birthday.png': { type: 'file_image', size: '1.5MB' },
                  },
                },
                Videos: {
                  locked: false,
                  size: '1.5MB',
                  type: 'folder',
                  sub: {
                    'Video.mp4': { type: 'file_video', size: '1MB' },
                  },
                },
                Music: {
                  locked: false,
                  size: '1.5MB',
                  type: 'folder',
                  sub: {
                    'Music.mp3': { type: 'file_music', size: '1MB' },
                  },
                },
                Downloads: {
                  locked: false,
                  size: '0B',
                  type: 'folder',
                  sub: {},
                },
                Desktop: {
                  locked: false,
                  size: '0B',
                  type: 'folder',
                  sub: {},
                },
              },
            },
            Default: {
              locked: true,
              size: '930MB',
              type: 'drive_lock',
              sub: {},
            },
          },
        },
        Windows: {
          locked: true,
          size: '74GB',
          type: 'drive_lock',
          sub: {},
        },
      },
    },
    'Dev Drive (F:)': {
      locked: false,
      size: '0B',
      type: 'drive',
      sub: {},
    },
  },
} as const
