#!/bin/bash
# 启动 Pi Better Web dev（127.0.0.1:30151）。
#
# 字体全部在 public/fonts 里、由 app/fonts.css 本地声明，所以不再需要
# next/font/google，也不需要 pi-web 那套 30152 字体代理 + mock CSS。
# 30151 已有实例就复用：再起第二个 next dev 会争 .next/dev/lock。
set -euo pipefail

cd "$(dirname "$0")"

if lsof -nP -iTCP:30151 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "[dev] 30151 已有 dev server 在跑：http://127.0.0.1:30151"
  echo "[dev] 需要重启就先 kill $(lsof -nP -iTCP:30151 -sTCP:LISTEN -t | tr '\n' ' ')"
  exit 0
fi

npm run dev
