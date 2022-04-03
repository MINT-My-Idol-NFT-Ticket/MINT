import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, useGLTF, Bounds, Html, useProgress, useTexture } from '@react-three/drei'

function MintTicket3D(props) {
  const TicketMesh = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/mintticket3.glb')
    // const { nodes, materials } = useLoader(GLTFLoader, '/mintticket3.glb')
    // const [front, back] = useLoader(TextureLoader, [
    //   // 'https://img.sbs.co.kr/newsnet/etv/upload/2020/10/28/30000654805_1280.jpg',
    //   'https://image.ytn.co.kr/general/jpg/2021/0507/202105071556373002_d.jpg',
    //   'http://newsimg.hankookilbo.com/2019/05/08/201905082306085099_1.jpg',
    //   // 'http://mrmaymay.com/wp-content/uploads/2017/10/MayMay-v%E1%BA%A3i-thun-k%E1%BA%BB-s%E1%BB%8Dc-viscose-00011-e1507747570434-180x180.jpg',
    // ])
    const [front, back] = useTexture([
      'https://t1.daumcdn.net/cfile/tistory/99BB43455E8108F209',
      'http://newsimg.hankookilbo.com/2019/05/08/201905082306085099_1.jpg',
    ])
    const [video] = useState(() =>
      Object.assign(document.createElement('video'), {
        // src: 'https://ipfs.io/ipfs/Qmdoj4Cua7KfroYi2DpDtdQs8HN1uxDBodUvuZN4KBzh7Z',
        // src: 'https://ipfs.io/ipfs/QmSyAeBrGPazXFKGjqeH3zRTAG78tRoaV9mXDpLemr1Q6E',
        src: 'https://ipfs.io/ipfs/QmXgF4TTBDGbso4p9QFVFfYao9uHDMk4o8Jujw8rEV33A6',
        crossOrigin: 'Anonymous',
        loop: true,
        muted: true,
        offset: { x: 1, y: 1 },
      }),
    )
    const texture = Object.assign(new THREE.VideoTexture(video), { offset: { x: 0.2, y: 0 } })
    console.log(texture)

    useEffect(() => video.play(), [video])

    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[-0.1, 4.74, 0]} scale={[2.52, 2.52, 0.02]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Front}
            scale={[-1, 1, 1]}>
            <meshBasicMaterial attach="material" transparent toneMapped={false} map={texture} />
            {/* <meshBasicMaterial toneMapped={false}>
              <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial> */}
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials.Side}>
            <meshBasicMaterial attach="material" color="#13161B" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials.Back}>
            <meshBasicMaterial attach="material" color="#222831" />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.img}
          position={[-0.08, 4.8, -0.02]}
          rotation={[-1.57, 0, 0]}
          scale={[-2.19, 2.19, 3.53]}>
          <meshBasicMaterial attach="material" map={back} side={THREE.FrontSide} />
        </mesh>
      </group>
    )
  }

  const Loader = () => {
    const { progress } = useProgress()
    return <Html center>{progress}% loaded</Html>
  }

  return (
    <Canvas style={{ minHeight: '95vh' }} camera={{ position: [-0.1, 4.74, 0], fov: 80 }} shadowMap>
      <color attach="background" args={['#222831']} />
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={<Loader />}>
        <Bounds fit clip margin={1.2}>
          <TicketMesh />
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

useGLTF.preload('/mintticket3.glb')
