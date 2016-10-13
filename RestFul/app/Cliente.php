<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = 'clientes';

	protected $guarded = array('id');
    
    protected $fillable = ['nit', 'nombre', 'direccion', 'telefono', 'correo'];
    
    public function ventas()
    {
        return $this->hasMany('Venta', 'cliente', 'id');
    }
    
    public function cotizaciones()
    {
        return $this->hasMany('Cotizacion', 'cliente', 'id');
    }
}