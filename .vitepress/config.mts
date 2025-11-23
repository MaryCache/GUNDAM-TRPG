import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
    title: "GUNDAM-TRPG",
    description: "WebアプリとBotが連携する統合運用型TRPGシステム",
    lang: 'ja-JP',
    cleanUrls: true,
    srcDir: '.',
    appearance: 'dark', // Force dark mode

    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap' }]
    ],

    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: 'ホーム', link: '/' },
            { text: 'クイックスタート', link: '/クイックスタート' },
            { text: '用語集', link: '/用語集' },
            { text: 'GitHub', link: 'https://github.com/MaryCache/GUNDAM-TRPG' }
        ],

        sidebar: [
            {
                text: '🔰 はじめに',
                items: [
                    { text: 'クイックスタート', link: '/クイックスタート' },
                    { text: '用語集', link: '/用語集' },
                    { text: 'エコシステム概要', link: '/README' }
                ]
            },
            {
                text: '🛠️ 作成規律',
                items: [
                    { text: '作成規律トップ', link: '/作成規律/README' },
                    { text: '従軍者作成規律', link: '/作成規律/従軍者作成規律' },
                    { text: 'MS作成規律', link: '/作成規律/MS作成規律' },
                    { text: 'バランスガイドライン', link: '/作成規律/バランスガイドライン' },
                    { text: 'CORE:ARTS一覧', link: '/作成規律/CORE_ARTS' }
                ]
            },
            {
                text: '⚔️ 戦闘処理',
                items: [
                    { text: '戦闘処理トップ', link: '/戦闘処理/README' },
                    { text: '戦闘開始', link: '/戦闘処理/戦闘開始' },
                    { text: 'TURN処理', link: '/戦闘処理/TURN処理' },
                    { text: 'ARTS使用処理', link: '/戦闘処理/ARTS使用処理' },
                    { text: '部位処理', link: '/戦闘処理/部位処理' },
                    { text: '戦闘終了', link: '/戦闘処理/戦闘終了' },
                    { text: '無双バトル', link: '/戦闘処理/無双バトル' }
                ]
            },
            {
                text: '🎲 進行規律',
                items: [
                    { text: '進行規律トップ', link: '/進行規律/README' },
                    { text: '技能使用規律', link: '/進行規律/技能使用規律' },
                    { text: 'タスク', link: '/進行規律/タスク' },
                    { text: '同調率システム', link: '/進行規律/同調率' }
                ]
            },
            {
                text: '💾 サンプルデータ',
                items: [
                    { text: 'サンプル一覧', link: '/data/examples/README' },
                    { text: 'サンプル機体:GM', link: '/data/examples/MS_GM_TLv10' },
                    { text: 'サンプル機体:ザクII', link: '/data/examples/MS_ZakuII_TLv8' },
                    { text: 'サンプル機体:ゲルググ', link: '/data/examples/MS_Gelgoog_TLv12' },
                    { text: 'サンプルキャラ:アムロ', link: '/data/examples/CHARACTER_Amuro' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/MaryCache/GUNDAM-TRPG' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025 GUNDAM-TRPG Project'
        },

        search: {
            provider: 'local'
        }
    }
}))
