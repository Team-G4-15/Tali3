<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatronRequest extends FormRequest
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
        return [
            'patron_email' => 'required|string|unique:patron,patron_email',
            'last_name' => 'string|required',
            'first_name' => 'string|required',
            'type' => 'string|required',
            'university_id' => 'integer|required',
        ];
    }
}
