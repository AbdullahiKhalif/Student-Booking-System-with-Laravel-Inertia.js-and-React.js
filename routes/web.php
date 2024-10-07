<?php
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
// Route::get('/', function () {
//     return inertia('Home');
// });
Route::get('/', [StudentController::class, 'index']);
Route::resource('students', StudentController::class)-> except('index');
