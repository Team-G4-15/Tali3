<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResearchpaperRequest extends FormRequest
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
            'title' => 'required|string',
            'iso' => 'string|required',
            'description' => 'string|required',
            'quantity' => 'integer|required',
            'language_code' => 'string',
            'location_id' => 'integer',
            'field_name' => 'string|required',
            'publish_date' => 'date',
            'keywords' => 'string',
            
        ];
    }
}
