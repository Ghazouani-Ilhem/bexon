import React from 'react'
import Head from 'next/head'
import AnimationTest from '@/components/AnimationTest'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bexon - Animation Test</title>
        <meta name="description" content="Testing animations in Next.js" />
      </Head>
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AnimationTest animationType="fadeInDown" delay="0.2s">
              <h1 className="text-center mb-5">Animation Test Page</h1>
            </AnimationTest>
            
            {/* Test WOW.js animations */}
            <div className="row">
              <div className="col-md-4 mb-4">
                <AnimationTest animationType="fadeInUp" delay="0.2s">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Fade In Up</h5>
                      <p className="card-text">This card should fade in from bottom with a 0.2s delay.</p>
                    </div>
                  </div>
                </AnimationTest>
              </div>
              
              <div className="col-md-4 mb-4">
                <AnimationTest animationType="fadeInLeft" delay="0.4s">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Fade In Left</h5>
                      <p className="card-text">This card should fade in from left with a 0.4s delay.</p>
                    </div>
                  </div>
                </AnimationTest>
              </div>
              
              <div className="col-md-4 mb-4">
                <AnimationTest animationType="fadeInRight" delay="0.6s">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Fade In Right</h5>
                      <p className="card-text">This card should fade in from right with a 0.6s delay.</p>
                    </div>
                  </div>
                </AnimationTest>
              </div>
            </div>
            
            {/* More test elements */}
            <div className="row">
              <div className="col-12 mb-4">
                <AnimationTest animationType="fadeInDown" delay="0.8s">
                  <div className="alert alert-info">
                    <h4>Fade In Down</h4>
                    <p>This alert should fade in from top with a 0.8s delay.</p>
                  </div>
                </AnimationTest>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-4">
                <AnimationTest animationType="slideInUp" delay="1s">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Slide In Up</h5>
                      <p className="card-text">This card should slide in from bottom with a 1s delay.</p>
                    </div>
                  </div>
                </AnimationTest>
              </div>
              
              <div className="col-md-6 mb-4">
                <AnimationTest animationType="slideInDown" delay="1.2s">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Slide In Down</h5>
                      <p className="card-text">This card should slide in from top with a 1.2s delay.</p>
                    </div>
                  </div>
                </AnimationTest>
              </div>
            </div>
            
            {/* Test with different delays */}
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={item} className="col-md-2 mb-3">
                  <AnimationTest animationType="fadeInUp" delay={`${1.4 + index * 0.1}s`}>
                    <div className="card">
                      <div className="card-body text-center">
                        <h6>Item {item}</h6>
                        <small>Delay: {1.4 + index * 0.1}s</small>
                      </div>
                    </div>
                  </AnimationTest>
                </div>
              ))}
            </div>
            
            {/* Instructions */}
            <div className="row mt-5">
              <div className="col-12">
                <AnimationTest animationType="fadeInUp" delay="2s">
                  <div className="alert alert-warning">
                    <h5>Animation Test Instructions:</h5>
                    <ul>
                      <li>Scroll down slowly to see the animations trigger</li>
                      <li>Elements with "wow" class should be visible by default</li>
                      <li>Animations should trigger when elements come into view</li>
                      <li>Check browser console for animation initialization logs</li>
                      <li>If WOW.js fails, fallback animations will be applied after 2 seconds</li>
                    </ul>
                  </div>
                </AnimationTest>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}