<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title inertia>{{ config('app.name') }}</title>

    <link rel="shortcut icon" href="{{ asset('favicon.png') }}" type="image/png">

    @routes
    @vite('resources/frontend/app.js')
    @inertiaHead
</head>

<body>
    @inertia
</body>
<script>
    window.appBaseUrl = "{{ url('/') }}";
</script>

</html>
