<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table = 'proveedores';

	protected $guarded = array('id');

    protected $fillable = ['nit', 'empresa', 'telefono_empresa', 'contacto', 'telefono_personal', 'direccion', 'correo'];

    public function compras()
    {
        return $this->hasMany('Compra', 'proveedor', 'id');
    }
}
