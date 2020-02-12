const UNIFORMS = {

	"uInt" :  { type: "i", value: 1 },     // single integer
	"uFloat" : { type: "f", value: 3.14 }, // single float
	
	"uVec2" : { type: "v2", value: new THREE.Vector2( 0, 1 ) },       // single Vector2
	"uVec3" : { type: "v3", value: new THREE.Vector3( 0, 1, 2 ) },    // single Vector3
	"uVec4" : { type: "v4", value: new THREE.Vector4( 0, 1, 2, 3 ) }, // single Vector4
	
	"uCol" : { type: "c", value: new THREE.Color( 0xffaa00 ) }, // single Color
	
	"uMat4" : { type: "m4", value: new THREE.Matrix4() }, // single Matrix4
	
	"uTex" :     { type: "t", value: THREE.ImageUtils.loadTexture( "texture.jpg" ) }, // regular texture
	"uTexCube" : { type: "t", value: THREE.ImageUtils.loadTextureCube( [ "px.jpg", "nx.jpg", // cube texture
																		 "py.jpg", "ny.jpg", 
																		 "pz.jpg", "nz.jpg" ] ) },
	
	"uIntArray"  : { type: "iv1", value: [ 1, 2, 3, 4, 5 ] },    // integer array (plain)
	"uIntArray3" : { type: "iv", value: [ 1, 2, 3, 4, 5, 6 ] },   // integer array (ivec3)
	
	"uFloatArray"  : { type: "fv1", value: [ 0.1, 0.2, 0.3, 0.4, 0.5 ] },    // float array (plain)
	"uFloatArray3" : { type: "fv",  value: [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6 ] }, // float array (vec3)
	
	"uVec2Array" : { type: "v2v", value: [ new THREE.Vector2( 0.1, 0.2 ), 
										   new THREE.Vector2( 0.4, 0.5 ) ] }, // Vector2 array
	
	"uVec3Array" : { type: "v3v", value: [ new THREE.Vector3( 0.1, 0.2, 0.3 ), 
										   new THREE.Vector3( 0.4, 0.5, 0.6 ) ] }, // Vector3 array
	
	"uVec4Array" : { type: "v4v", value: [ new THREE.Vector4( 0.1, 0.2, 0.3, 0.4 ), 
										   new THREE.Vector4( 0.4, 0.5, 0.6, 0.7 ) ] }, // Vector4 array
	
	"uMat4Array" : { type: "m4v", value: [ new THREE.Matrix4(), new THREE.Matrix4() ] }, // Matrix4 array
	
	"uTexArray" : { type: "tv", value: [ new THREE.Texture(), new THREE.Texture() ] } // texture array (regular)
	
};