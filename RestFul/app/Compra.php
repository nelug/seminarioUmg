<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    protected $table = 'compras';

	protected $guarded = array('id');

    protected $fillable = ['total', 'proveedor', 'usuario', 'fecha_documento', 'numero_documento'];

    public function detalle()
    {
        return $this->hasMany('App\DetalleCompra', 'compra', 'id');
    }

    public function estado_proceso()
    {
        return $this->belongsTo('App\EstadoProceso', 'estado_proceso', 'id');
    }

    public function usuario()
    {
        return $this->belongsTo('App\User', 'usuario', 'id');
    }

    public function proveedor()
    {
        return $this->belongsTo('App\Proveedor', 'proveedor', 'id');
    }
}
