<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table = 'proveedores';

	protected $guarded = array('id');
    
    protected $fillable = ['nit', 'empresa', 'representante', 'telefono', 'direccion', 'correo'];
}