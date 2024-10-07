<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'stdName' => fake()->name(),
            'class' => "CA" . fake()->numberBetween(100, 999), // Randomized class number
            'address' => fake()->city(), // Randomized city for the address
            'email' => fake()->unique()->safeEmail(),
            'password' => bcrypt('123456'),
        ];
    }
    
}
