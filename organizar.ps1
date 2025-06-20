# Definir ruta base
$basePath = "src/app"

# Crear carpetas destino si no existen
$foldersToCreate = @("ajustes", "perfil", "home", "auth", "registro")
foreach ($folder in $foldersToCreate) {
    $fullPath = Join-Path $basePath $folder
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath
    }
}

# Mover archivos según funcionalidad
Move-Item -Path "$basePath/configuracion.html" -Destination "$basePath/ajustes" -Force
Move-Item -Path "$basePath/consejos_salud.html" -Destination "$basePath/ajustes" -Force

Move-Item -Path "$basePath/editar_perfil.html" -Destination "$basePath/perfil" -Force
Move-Item -Path "$basePath/perfil_usuario.html" -Destination "$basePath/perfil" -Force

Move-Item -Path "$basePath/principal.html" -Destination "$basePath/home" -Force
Move-Item -Path "$basePath/index.html" -Destination "$basePath/home" -Force

Move-Item -Path "$basePath/recuperar_contrasena.html" -Destination "$basePath/auth" -Force
Move-Item -Path "$basePath/register.html" -Destination "$basePath/auth" -Force
Move-Item -Path "$basePath/usuario_creado.html" -Destination "$basePath/auth" -Force
Move-Item -Path "$basePath/usuario_existente.html" -Destination "$basePath/auth" -Force

# Mover carpeta android a raíz si existe en src/app
if (Test-Path "$basePath/android") {
    Move-Item -Path "$basePath/android" -Destination "." -Force
}

# Eliminar carpetas innecesarias
$foldersToDelete = @(".angular", ".idea", "node_modules")
foreach ($folder in $foldersToDelete) {
    $deletePath = Join-Path $basePath $folder
    if (Test-Path $deletePath) {
        Remove-Item -Recurse -Force $deletePath
    }
}