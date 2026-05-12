export type App = {
  id: string
  name: string
  tagline: string
  description: readonly string[]
  note?: string
  appStoreUrl: string
  iconUrl: string
}

export const apps: readonly App[] = [
  {
    id: 'memoru',
    name: 'メモル',
    tagline: 'Markdown memo, exportable.',
    description: [
      'Markdown 形式で手軽にメモが取れる、シンプルかつ高機能なメモアプリ。',
      '作成したメモは Word（.docx）や PDF にワンタップで出力でき、資料作成や共有もスムーズ。',
    ],
    appStoreUrl:
      'https://apps.apple.com/jp/app/%E3%83%A1%E3%83%A2%E3%83%AB/id6740057422?itscg=30200&itsct=apps_box_artwork&mttnsubad=6740057422',
    iconUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/82/ca/9d/82ca9d40-1dff-be17-dc0f-51ed40f427b0/icon-0-0-1x_U007epad-0-1-sRGB-85-220.png/540x540bb.jpg',
  },
  {
    id: 'mogomogo',
    name: 'モゴモゴ',
    tagline: 'Delayed-voice party fun.',
    description: [
      'イヤホンをつけて話すと自分の声が遅れて返ってきて、呂律が回らなくなる不思議なアプリ。',
      '友達との会話やパーティーで盛り上がるエンタメアプリ。',
    ],
    appStoreUrl:
      'https://apps.apple.com/jp/app/%E3%83%A2%E3%82%B4%E3%83%A2%E3%82%B4/id6755545433?itscg=30200&itsct=apps_box_artwork&mttnsubad=6755545433',
    iconUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/43/dd/fe/43ddfe56-d68e-4015-09a7-9e18743c7369/mogomogo-0-0-1x_U007epad-0-0-0-1-0-sRGB-85-220.png/540x540bb.jpg',
  },
  {
    id: 'scanet',
    name: 'Scanet',
    tagline: 'LiDAR-powered 3D scanner.',
    description: [
      'iPhone の LiDAR センサーを利用して、現実世界を 3D データとしてスキャンするアプリ。',
    ],
    note: 'LiDAR センサー搭載モデルでのみ使用可能。',
    appStoreUrl:
      'https://apps.apple.com/jp/app/scanet/id6756174600?itscg=30200&itsct=apps_box_artwork&mttnsubad=6756174600',
    iconUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fd/49/e9/fd49e9f8-5954-aa51-2f53-c5a175f3b5f0/Scanet-0-0-1x_U007ephone-0-1-sRGB-85-220.png/540x540bb.jpg',
  },
] as const
