@servers(['web' => 'server.count01'])

@setup
$repository = 'git@skygithub.com:sky9413/nextjs_blod.git';
$app_dir = '/opt/node/nextjs_blog';
$docker_container = 'nextjs_blog'; // 修改為你實際的 Docker 容器名稱
@endsetup

@story('deploy')
check_or_init_repo
pull_code
install_deps
build_app
restart_app
echo_success
@endstory

@story('init')
init_repo
install_deps
build_app
restart_app
echo_success
@endstory

@story('quick')
pull_code
build_app
restart_app
echo_success
@endstory

@task('check_or_init_repo')
echo '🔍 檢查 Git 倉庫...'
if [ ! -d {{ $app_dir }}/.git ]; then
echo '⚠️ 不是 Git 倉庫，開始初始化...'
# 備份現有目錄（如果存在）
if [ -d {{ $app_dir }} ]; then
mv {{ $app_dir }} {{ $app_dir }}old$(date +%Y%m%d_%H%M%S)
fi
# 克隆項目
cd {{ dirname($app_dir) }}
git clone {{ $repository }} {{ basename($app_dir) }}
echo '✅ Git 倉庫初始化完成'
else
echo '✅ Git 倉庫已存在'
fi
@endtask

@task('init_repo')
echo '🔄 初始化項目...'
# 備份現有目錄（如果存在）
if [ -d {{ $app_dir }} ]; then
mv {{ $app_dir }} {{ $app_dir }}old$(date +%Y%m%d_%H%M%S)
fi
# 克隆項目
cd {{ dirname($app_dir) }}
git clone {{ $repository }} {{ basename($app_dir) }}
echo '✅ 項目初始化完成'
@endtask

@task('pull_code')
echo '🔄 同步遠端代碼（硬重置）...'
cd {{ $app_dir }}
git fetch origin
git reset --hard origin/main
git clean -fd
echo '✅ 代碼同步完成（已對齊 origin/main）'
@endtask


@task('install_deps')
echo '📦 安裝依賴...'
cd {{ $app_dir }}
npm ci
echo '✅ 依賴安裝完成'
@endtask

@task('build_app')
echo '🔨 構建應用...'
cd {{ $app_dir }}
npm run build
echo '✅ 構建完成'
@endtask

@task('restart_app')
echo '🔄 重啟 Docker 容器...'
docker restart {{ $docker_container }} || echo "⚠️ 容器重啟失敗，請檢查容器名稱或在 1Panel 中手動重啟"
echo '✅ 容器重啟完成'
@endtask

@task('echo_success')
echo '🎉 部署成功完成！'
echo '📍 應用目錄: {{ $app_dir }}'
echo '🐳 Docker 容器: {{ $docker_container }}'
echo '📊 檢查容器狀態: docker ps | grep {{ $docker_container }}'
@endtask