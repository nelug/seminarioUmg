<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class DetalleDescarga extends Model
{
    protected $table = 'detalle_descargas';

	protected $guarded = array('id');

    protected $fillable = ['descarga', 'producto', 'cantidad', 'precio'];

    public function descarga()
    {
        return $this->belongsTo('Descarga', 'descarga', 'id');
    }

    public function producto()
    {
        return $this->belongsTo('Producto', 'producto', 'id');
    }
}
