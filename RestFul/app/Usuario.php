<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';

	protected $guarded = array('id');
    
    protected $fillable = ['estado', 'usuario', 'password', 'nombre', 'correo'];
    
    public function estado()
    {
        return $this->belongsTo('Estado', 'estado', 'id');
    }
}