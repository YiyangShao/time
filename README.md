# 把时间拿回来

一个基于 `Vite + React + TypeScript` 的横向互动故事展馆。

## 结构

- `src/App.tsx`：应用入口
- `src/components/`：故事展馆、单幕场景、导航组件
- `src/content/stories/`：故事内容配置
- `src/content/research.ts`：运行时研究数据
- `docs/research-notes.md`：调研总结与 reference

## 本地查看

需要本机已安装可用的 `Node.js` 与 `npm`。

启动开发服务器：

```bash
npm run dev -- --host 127.0.0.1 --port 4174
```

然后访问 `http://127.0.0.1:4174`

生产构建：

```bash
npm run build
```
