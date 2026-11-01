Get-ChildItem -Path "$env:USERPROFILE\AppData\Roaming\@termi" -Recurse -Include *.png, *.jpg, *.jpeg, *.webp -ErrorAction SilentlyContinue |
  Where-Object { $_.LastWriteTime -gt (Get-Date).AddHours(-4) } |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 15 |
  ForEach-Object { "{0} => {1} ({2} KB)" -f $_.FullName, $_.LastWriteTime, [math]::Round($_.Length / 1KB) } |
  Out-File -Encoding utf8 "$PSScriptRoot\att.txt"
