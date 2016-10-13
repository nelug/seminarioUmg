<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table = 'productos';

	protected $guarded = array('id');
    
    protected $fillable = ['codigo', 'descripcion', 'precio_venta', 'precio_costo', 'existencia', 'existencia_minima', 'marca'];
    
    public function detalleVenta()
    {
        return $this->hasMany('DetalleVenta', 'producto', 'id');
    }
    
    public function detalleCompra()
    {
        return $this->hasMany('DetalleCompra', 'producto', 'id');
    }
    
    public function detalleCotizacion()
    {
        return $this->hasMany('DetalleCotizacion', 'producto', 'id');
    }
    
    public function detalleDescarga()
    {
        return $this->hasMany('DetalleDescarga', 'producto', 'id');
    }
}