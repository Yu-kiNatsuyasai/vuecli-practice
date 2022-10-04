echo '開始一鍵部署流程'

# 發生錯誤時執行終止指令
set -e

# 打包編譯
npm run build

echo '編譯完成，移動目錄到編譯出來的 dist 資料夾'
#移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist
# 初始化並設置 Git
git init
git add .
git commit -m "update `date +'%Y-%m-%d %H:%M:%S'`";

# 上傳到到 gh-pages
git push -f https://github.com/Yu-kiNatsuyasai/vuecli-practice.git master:gh-pages

cd -
echo '一鍵部署完成'