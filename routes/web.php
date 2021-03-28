<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
*/
 
Route::get('{any}', function () {
    return view('layout/app');
})->where('any', '.*');

Route::get('/create', function () {
    return view('create');
 });

 Route::get('/edit', function () {
    return view('edit');
 });
