<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class DetalleVenta extends Model
{
    protected $table = 'detalle_ventas';

	protected $guarded = array('id');
    
    protected $fillable = ['venta', 'producto', 'cantidad', 'precio', 'ganancia'];
    
    public function venta()
    {
        return $this->belongsTo('Venta', 'venta', 'id');
    }
    
    public function producto()
    {
        return $this->belongsTo('Producto', 'producto', 'id');
    }
}