<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Cotizacion extends Model
{
    protected $table = 'cotizaciones';

	protected $guarded = array('id');

    protected $fillable = ['total', 'cliente', 'usuario', 'fecha'];

    public function detalle()
    {
        return $this->hasMany('App\DetalleCotizacion', 'cotizacion', 'id');
    }

    public function estado_proceso()
    {
        return $this->belongsTo('App\EstadoProceso', 'estado_proceso', 'id');
    }

    public function usuario()
    {
        return $this->belongsTo('App\User', 'usuario', 'id');
    }

    public function cliente()
    {
        return $this->belongsTo('App\Cliente', 'cliente', 'id');
    }
}
