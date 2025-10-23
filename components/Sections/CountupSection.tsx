import React from 'react'

interface CountupItem {
  number: string
  suffix: string
  text: string
  hasSeparator?: boolean
}

const CountupSection: React.FC = () => {
  const countupItems: CountupItem[] = [
    {
      number: '93',
      suffix: '%',
      text: 'Projects Completed.',
      hasSeparator: true
    },
    {
      number: '20',
      suffix: 'M',
      text: 'Reach Worldwide',
      hasSeparator: true
    },
    {
      number: '8.5',
      suffix: 'X',
      text: 'Faster Growth',
      hasSeparator: true
    },
    {
      number: '100',
      suffix: '+',
      text: 'Awards Archived',
      hasSeparator: false
    }
  ]

  return (
    <div className="tj-countup-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="countup-wrap">
              {countupItems.map((item, index) => (
                <div key={index} className="countup-item">
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count={item.number}></span>
                    <span className="count-plus">{item.suffix}</span>
                  </div>
                  <span className="count-text">{item.text}</span>
                  {item.hasSeparator && (
                    <span 
                      className="count-separator" 
                      style={{backgroundImage: "url('/assets/images/shape/separator.svg')"}}
                    ></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountupSection