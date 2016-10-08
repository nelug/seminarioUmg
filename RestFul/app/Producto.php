<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table = 'productos';

	protected $guarded = array('id');
    
    protected $fillable = ['codigo', 'descripcion', 'precio_venta', 'precio_costo', 'existencia'];
}