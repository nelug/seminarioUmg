<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class DetalleCompra extends Model
{
    protected $table = 'detalle_compras';

	protected $guarded = array('id');

    protected $fillable = ['compra', 'producto', 'cantidad', 'precio'];

    public function compra()
    {
        return $this->belongsTo('Compra', 'compra', 'id');
    }

    public function producto()
    {
        return $this->belongsTo('Producto', 'producto', 'id');
    }
}
