<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class DetalleCotizacion extends Model
{
    protected $table = 'detalle_cotizaciones';

	protected $guarded = array('id');

    protected $fillable = ['cotizacion', 'producto', 'cantidad', 'precio'];

    public function cotizacion()
    {
        return $this->belongsTo('Cotizacion', 'cotizacion', 'id');
    }

    public function producto()
    {
        return $this->belongsTo('Producto', 'producto', 'id');
    }
}
