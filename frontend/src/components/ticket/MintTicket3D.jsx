import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Environment, MeshReflectorMaterial, ContactShadows, Backdrop, Bounds } from '@react-three/drei'

function CoinMesh() {
  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.y += 0.01))
  const [front, back] = useLoader(TextureLoader, [
    'http://image.toast.com/aaaaab/ticketlink/TKL_3/750x90111.jpg',
    'https://play-lh.googleusercontent.com/l5FzKvq_vlwIgja_dVJTfixx3nCiGb7GDedOtmQRtFh9Q53OcHFfVn-tzUAVNQ7EXL0',
  ])
  const [active, setActive] = useState(false)

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={3}
      onClick={() => {
        setActive(!active)
        console.log('clicked')
      }}>
      <boxGeometry attach="geometry" args={[1, 1.8, 0.005]} />
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" map={front} side={THREE.FrontSide} />
      <meshBasicMaterial attachArray="material" map={back} side={THREE.FrontSide} />
    </mesh>
  )
}

function MintTicket3D(props) {
  return (
    <Canvas style={{ minHeight: '95vh' }}>
      <color attach="background" args={['#222831']} />
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-1, -2, -5]} intensity={0.2} color="#0c8cbf" />
      <Suspense fallback={null}>
        <Bounds fit clip margin={1.2}>
          <CoinMesh />
        </Bounds>
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -35, 0]}
          opacity={0.2}
          width={200}
          height={200}
          blur={1}
          far={50}
        />
      </Suspense>
    </Canvas>
  )
}

export default MintTicket3D
