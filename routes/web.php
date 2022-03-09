<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MaplistController;
use App\Http\Controllers\DirectionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/maplist/index', [MaplistController::class, 'index'])
    ->middleware(['auth'])->name('maplist.index');

Route::post(
    '/maplist/create',
    [MaplistController::class, 'create']
)->middleware(['auth'])->name('maplist.create');

Route::get(
    '/maplist/{list}',
    [MaplistController::class, 'show']
)->middleware(['auth'])->name('maplist.show');

Route::get('/direction/index', [DirectionController::class, 'index'])
    ->middleware(['auth'])->name('direction.index');

require __DIR__ . '/auth.php';
