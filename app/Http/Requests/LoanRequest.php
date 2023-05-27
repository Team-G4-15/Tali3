<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoanRequest extends FormRequest
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
            'book_id' => 'required|integer',
            'patron_email' => 'email|required|exists:patron,patron_email',
            'copy_number' => 'integer|required',
            'loan_date' => 'date|required',
            'due_date' => 'date|required|after:loan_date',
            'email' => "email|required|exists:librarian,email",
        ];
    }
}
?>
