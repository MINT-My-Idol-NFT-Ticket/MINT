import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars, ContactShadows, Bounds } from '@react-three/drei'
import { BoxGeometry } from 'three'

function CoinMesh() {
  const mesh = useRef(null)
  const [front, back] = useLoader(TextureLoader, [
    'http://image.toast.com/aaaaab/ticketlink/TKL_3/750x90111.jpg',
    'https://www.designcap.com/res/template/medium/cdd212969937a4114066be797837c690/page0.jpg?t=1602654190',
  ])
  const [active, setActive] = useState(false)
  useFrame(() => {
    if (active) {
      mesh.current.rotation.y += Math.PI
      setActive(!active)
    }
    mesh.current.rotation.y += 0.003
  })

  return (
    <group>
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        scale={6}
        onClick={() => {
          setActive(!active)
        }}>
        <boxGeometry castShadow attach="geometry" args={[1, 1.8, 0.005]} />
        <meshBasicMaterial attachArray="material" color="black" />
        <meshBasicMaterial attachArray="material" color="black" />
        <meshBasicMaterial attachArray="material" color="black" />
        <meshBasicMaterial attachArray="material" color="black" />
        <meshBasicMaterial attachArray="material" map={front} side={THREE.FrontSide} />
        <meshBasicMaterial attachArray="material" map={back} side={THREE.FrontSide} />
      </mesh>
    </group>
  )
}

function MintTicket3D(props) {
  return (
    <Canvas style={{ minHeight: '95vh' }} camera={{ position: [1, 1, 1], fov: 90 }} shadowMap>
      <color attach="background" args={['#222831']} />
      <directionalLight position={[-1, -2, -5]} intensity={0.2} color="#0c8cbf" castShadow />
      <Suspense fallback={null}>
        <Bounds fit clip margin={1.2}>
          <CoinMesh />
        </Bounds>
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />
      </Suspense>
      <OrbitControls makeDefault enableZoom={true} enablePan={true} />
    </Canvas>
  )
}

export default MintTicket3D
