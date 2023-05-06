<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Symfony\Component\Console\Output\ConsoleOutput;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $output = new ConsoleOutput();
        $output->writeln("<info>my message</info>");
        // here we define the rules that should be applied to the input
        /* This will help us to get proper error messages */
        return [

            'firstName' => 'required|string|max:50',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Password::min(8)->letters()->symbols()]
        ];
    }
}
