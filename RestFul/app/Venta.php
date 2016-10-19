<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    protected $table = 'ventas';

	protected $guarded = array('id');

    protected $fillable = ['total', 'cliente', 'usuario', 'fecha'];

    public function detalle()
    {
        return $this->hasMany('App\DetalleVenta', 'venta', 'id');
    }

    public function estado()
    {
        return $this->belongsTo('App\EstadoProceso', 'estado_proceso', 'id');
    }

    public function usuario()
    {
        return $this->belongsTo('App\Usuario', 'usuario', 'id');
    }

    public function cliente()
    {
        return $this->belongsTo('App\Cliente', 'cliente', 'id');
    }
}
