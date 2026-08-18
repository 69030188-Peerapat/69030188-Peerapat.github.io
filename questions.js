// Database of Quiz Questions for both Basic and Advanced / University levels
// Developed by นายพีรพัฒน์ วิไชยวงค์ (69030188)

const quizData = {
  "basic": [
  {
    "id": 1,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดไม่ใช่ส่วนประกอบหลักขององค์ประกอบระบบคอมพิวเตอร์ (Hardware)?",
    "options": [
      {
        "key": "ก",
        "text": "Input Unit"
      },
      {
        "key": "ข",
        "text": "Control Unit"
      },
      {
        "key": "ค",// Database of Quiz Questions for both Basic and Advanced / University levels
// Developed by นายพีรพัฒน์ วิไชยวงค์ (69030188)

const quizData = {
  "basic": [
  {
    "id": 1,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดไม่ใช่ส่วนประกอบหลักขององค์ประกอบระบบคอมพิวเตอร์ (Hardware)?",
    "options": [
      {
        "key": "ก",
        "text": "Input Unit"
      },
      {
        "key": "ข",
        "text": "Control Unit"
      },
      {
        "key": "ค",
        "text": "Application Software"
      },
      {
        "key": "ง",
        "text": "Output Unit"
      }
    ],
    "answer": "ค",
    "explanation": "Application Software จัดเป็นซอฟต์แวร์ ไม่ใช่ส่วนประกอบของฮาร์ดแวร์"
  },
  {
    "id": 2,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "หน่วยประมวลผลกลาง (CPU) ประกอบด้วยส่วนสำคัญใดบ้าง?",
    "options": [
      {
        "key": "ก",
        "text": "Input Unit และ Output Unit"
      },
      {
        "key": "ข",
        "text": "Control Unit และ Arithmetic & Logic Unit (ALU)"
      },
      {
        "key": "ค",
        "text": "Memory Unit และ Storage Unit"
      },
      {
        "key": "ง",
        "text": "System Software และ Application Software"
      }
    ],
    "answer": "ข",
    "explanation": "CPU ประกอบด้วยหน่วยควบคุม (Control Unit) และหน่วยคำนวณ/ตรรกะ (ALU)"
  },
  {
    "id": 3,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "โปรแกรมประเภท Operating System (OS) จัดเป็นซอฟต์แวร์ประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "Application Software"
      },
      {
        "key": "ข",
        "text": "System Software"
      },
      {
        "key": "ค",
        "text": "Utility Software"
      },
      {
        "key": "ง",
        "text": "Peopleware"
      }
    ],
    "answer": "ข",
    "explanation": "OS จัดเป็นซอฟต์แวร์ระบบ (System Software)"
  },
  {
    "id": 4,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ขั้นตอนแรกของกระบวนการพัฒนาซอฟต์แวร์ (SDLC) คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "การออกแบบขั้นตอนวิธี (Design Algorithm)"
      },
      {
        "key": "ข",
        "text": "การกำหนดความต้องการของการแก้ปัญหา (Specifying Requirements)"
      },
      {
        "key": "ค",
        "text": "การสร้างโปรแกรม (Implement/Coding)"
      },
      {
        "key": "ง",
        "text": "การทดสอบและตรวจสอบ (Testing & Verification)"
      }
    ],
    "answer": "ข",
    "explanation": "ขั้นตอนแรกคือการกำหนดความต้องการของปัญหา (Specifying Requirements)"
  },
  {
    "id": 5,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อดีของพัฒนาซอฟต์แวร์แบบ Waterfall Model คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "สามารถปรับเปลี่ยนความต้องการได้ตลอดเวลา"
      },
      {
        "key": "ข",
        "text": "ได้ซอฟต์แวร์ที่มีคุณภาพสูงและบั๊กน้อยเนื่องจากวางแผนชัดเจน"
      },
      {
        "key": "ค",
        "text": "ไม่ต้องจัดทำเอกสารประกอบ"
      },
      {
        "key": "ง",
        "text": "เหมาะกับโครงการที่ไม่มีความแน่นอนสูง"
      }
    ],
    "answer": "ข",
    "explanation": "Waterfall มีโครงสร้างชัดเจน ทำทีละขั้นตอน ทำให้งานคุณภาพสูง บั๊กน้อย"
  },
  {
    "id": 6,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ซอฟต์แวร์การพัฒนาแบบใดที่ไม่เหมาะกับโครงการขนาดใหญ่และไม่มีการจัดทำเอกสาร SRS?",
    "options": [
      {
        "key": "ก",
        "text": "Waterfall Model"
      },
      {
        "key": "ข",
        "text": "Agile Model"
      },
      {
        "key": "ค",
        "text": "Big Bang Model"
      },
      {
        "key": "ง",
        "text": "Spiral Model"
      }
    ],
    "answer": "ค",
    "explanation": "Big Bang Model ไม่มีรูปแบบ วางแผน หรือเอกสาร เสี่ยงสูงมาก"
  },
  {
    "id": 7,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดคือลักษณะสำคัญของ Agile Model?",
    "options": [
      {
        "key": "ก",
        "text": "ทำงานเป็นขั้นตอนห้ามย้อนกลับ"
      },
      {
        "key": "ข",
        "text": "แบ่งการทำงานเป็นรอบสั้นๆ (Iterative) และปรับเปลี่ยน Requirement ได้รวดเร็ว"
      },
      {
        "key": "ค",
        "text": "เน้นการทำเอกสารให้สมบูรณ์ก่อนเริ่มเขียนโค้ด"
      },
      {
        "key": "ง",
        "text": "เหมาะสำหรับการพัฒนาแบบคนเดียวโดยไม่วางแผน"
      }
    ],
    "answer": "ข",
    "explanation": "Agile มุ่งเน้นการปรับตัว รวดเร็ว ซอยงานเป็นรอบสั้นๆ"
  },
  {
    "id": 8,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การแปลงปี ค.ศ. เป็น พ.ศ. มีความสัมพันธ์ระหว่างข้อมูลนำเข้าและผลลัพธ์อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "พ.ศ. = ค.ศ. - 543"
      },
      {
        "key": "ข",
        "text": "พ.ศ. = ค.ศ. + 543"
      },
      {
        "key": "ค",
        "text": "พ.ศ. = ค.ศ. * 543"
      },
      {
        "key": "ง",
        "text": "พ.ศ. = ค.ศ. / 543"
      }
    ],
    "answer": "ข",
    "explanation": "พ.ศ. มากกว่า ค.ศ. อยู่ 543 ปี ดังนั้น พ.ศ. = ค.ศ. + 543"
  },
  {
    "id": 9,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "บุคลากรทางคอมพิวเตอร์ประเภทใดทำหน้าที่วิเคราะห์และออกแบบระบบซอฟต์แวร์?",
    "options": [
      {
        "key": "ก",
        "text": "Programmer"
      },
      {
        "key": "ข",
        "text": "System Analyst (SA)"
      },
      {
        "key": "ค",
        "text": "Network Administrator"
      },
      {
        "key": "ง",
        "text": "End User"
      }
    ],
    "answer": "ข",
    "explanation": "System Analyst (SA) ทำหน้าที่วิเคราะห์และออกแบบระบบ"
  },
  {
    "id": 10,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ขั้นตอนใดใน SDLC ที่ทำหน้าที่แก้ไขข้อผิดพลาดหลังจากนำโปรแกรมไปใช้งานจริง?",
    "options": [
      {
        "key": "ก",
        "text": "Testing"
      },
      {
        "key": "ข",
        "text": "Design"
      },
      {
        "key": "ค",
        "text": "Maintenance & Update"
      },
      {
        "key": "ง",
        "text": "Implementation"
      }
    ],
    "answer": "ค",
    "explanation": "ขั้นตอนบำรุงรักษา (Maintenance) ทำหน้าที่ดูแลแก้ไขหลังนำไปใช้งานจริง"
  },
  {
    "id": 11,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดต่อไปนี้จัดเป็นซอฟต์แวร์ประยุกต์ (Application Software)?",
    "options": [
      {
        "key": "ก",
        "text": "Windows 11"
      },
      {
        "key": "ข",
        "text": "macOS"
      },
      {
        "key": "ค",
        "text": "Microsoft Word"
      },
      {
        "key": "ง",
        "text": "Ubuntu Linux"
      }
    ],
    "answer": "ค",
    "explanation": "Microsoft Word คือโปรแกรมประยุกต์ใช้งานเฉพาะทาง"
  },
  {
    "id": 12,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "หน่วยความจำประเภท RAM มีลักษณะการทำงานอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ข้อมูลไม่สูญหายเมื่อปิดเครื่อง"
      },
      {
        "key": "ข",
        "text": "อ่านข้อมูลได้เพียงอย่างเดียว"
      },
      {
        "key": "ค",
        "text": "หน่วยความจำชั่วคราว ข้อมูลหายเมื่อดับไฟ"
      },
      {
        "key": "ง",
        "text": "เก็บข้อมูลถาวรในรูปแบบจานแม่เหล็ก"
      }
    ],
    "answer": "ค",
    "explanation": "RAM เป็นหน่วยความจำชั่วคราว ข้อมูลจะหายไปเมื่อไม่มีกระแสไฟฟ้า"
  },
  {
    "id": 13,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การออกแบบส่วนติดต่อกับผู้ใช้ (User Interface) อยู่ในขั้นตอนใดของ SDLC?",
    "options": [
      {
        "key": "ก",
        "text": "Specifying Requirements"
      },
      {
        "key": "ข",
        "text": "Design"
      },
      {
        "key": "ค",
        "text": "Testing"
      },
      {
        "key": "ง",
        "text": "Maintenance"
      }
    ],
    "answer": "ข",
    "explanation": "การออกแบบส่วนติดต่อผู้ใช้จัดอยู่ในขั้นตอน Design"
  },
  {
    "id": 14,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "หากโครงการพัฒนาซอฟต์แวร์ต้องการปรับเปลี่ยน Requirement บ่อยครั้งตามความต้องการของลูกค้า ควรเลือกใช้โมเดลใด?",
    "options": [
      {
        "key": "ก",
        "text": "Waterfall Model"
      },
      {
        "key": "ข",
        "text": "Big Bang Model"
      },
      {
        "key": "ค",
        "text": "Agile Model"
      },
      {
        "key": "ง",
        "text": "Linear Model"
      }
    ],
    "answer": "ค",
    "explanation": "Agile ยืดหยุ่นสูง เหมาะกับโครงการที่ Requirement ปรับเปลี่ยนบ่อย"
  },
  {
    "id": 15,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "สิ่งใดที่เป็นข้อมูลนำเข้า (Input) ของโปรแกรมคำนวณพื้นที่สามเหลี่ยม?",
    "options": [
      {
        "key": "ก",
        "text": "พื้นที่สามเหลี่ยม"
      },
      {
        "key": "ข",
        "text": "ความยาวฐาน และ ความสูง"
      },
      {
        "key": "ค",
        "text": "สูตร 1/2 * ฐาน * สูง"
      },
      {
        "key": "ง",
        "text": "ค่าคงที่ 0.5"
      }
    ],
    "answer": "ข",
    "explanation": "ความยาวฐานและความสูง คือข้อมูลเข้าที่ต้องรับจากผู้ใช้เพื่อนำไปคำนวณ"
  },
  {
    "id": 16,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อเสียสำคัญของ Big Bang Model คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้เวลาวางแผนนานเกินไป"
      },
      {
        "key": "ข",
        "text": "มีความเสี่ยงสูงที่จะเกิดข้อผิดพลาดและไม่ได้ฟังก์ชันตามต้องการ"
      },
      {
        "key": "ค",
        "text": "มีค่าใช้จ่ายในการทำเอกสารสูง"
      },
      {
        "key": "ง",
        "text": "โครงสร้างซับซ้อนเกินไป"
      }
    ],
    "answer": "ข",
    "explanation": "Big Bang ไม่มีการวางแผน ทำให้เสี่ยงพบข้อผิดพลาดสูงมาก"
  },
  {
    "id": 17,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การเขียน Test Case เพื่อทดสอบโปรแกรม ควรทำในขั้นตอนใดเป็นอย่างน้อย?",
    "options": [
      {
        "key": "ก",
        "text": "วางแผนล่วงหน้าตั้งแต่ขั้นตอนการออกแบบ และทดสอบในขั้นตอน Testing"
      },
      {
        "key": "ข",
        "text": "หลังนำโปรแกรมขึ้นใช้งานไปแล้ว 1 ปี"
      },
      {
        "key": "ค",
        "text": "ไม่จำเป็นต้องเขียน Test Case"
      },
      {
        "key": "ง",
        "text": "ทำเฉพาะเมื่อลูกค้าแจ้งบั๊ก"
      }
    ],
    "answer": "ก",
    "explanation": "ออกแบบการทดสอบไว้ล่วงหน้า แล้วนำไปใช้ทดสอบจริงในขั้น Testing"
  },
  {
    "id": 18,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "บุคลากรกลุ่มใดคือผู้ใช้งานซอฟต์แวร์ขั้นสุดท้าย?",
    "options": [
      {
        "key": "ก",
        "text": "System Analyst"
      },
      {
        "key": "ข",
        "text": "Developer"
      },
      {
        "key": "ค",
        "text": "End User"
      },
      {
        "key": "ง",
        "text": "Tester"
      }
    ],
    "answer": "ค",
    "explanation": "End User คือผู้ใช้งานซอฟต์แวร์ขั้นสุดท้าย"
  },
  {
    "id": 19,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดเรียงลำดับขั้นตอนใน Waterfall Model ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Coding -> Design -> Requirement -> Testing"
      },
      {
        "key": "ข",
        "text": "Requirement -> Design -> Implementation -> Testing -> Maintenance"
      },
      {
        "key": "ค",
        "text": "Design -> Requirement -> Testing -> Maintenance"
      },
      {
        "key": "ง",
        "text": "Testing -> Implementation -> Design -> Requirement"
      }
    ],
    "answer": "ข",
    "explanation": "ลำดับ Waterfall: Requirement -> Design -> Implementation -> Testing -> Maintenance"
  },
  {
    "id": 20,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ส่วนใดในองค์ประกอบคอมพิวเตอร์ที่ทำหน้าที่ตัดสินใจทางตรรกะ (เช่น มากกว่า, น้อยกว่า, เท่ากับ)?",
    "options": [
      {
        "key": "ก",
        "text": "Control Unit"
      },
      {
        "key": "ข",
        "text": "Arithmetic & Logic Unit (ALU)"
      },
      {
        "key": "ค",
        "text": "Main Memory"
      },
      {
        "key": "ง",
        "text": "Output Device"
      }
    ],
    "answer": "ข",
    "explanation": "ALU ทำหน้าที่คำนวณทางคณิตศาสตร์และตัดสินใจทางตรรกะ"
  },
  {
    "id": 21,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "\"อัลกอริทึม\" (Algorithm) หมายถึงอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "ภาษาโปรแกรมชนิดหนึ่ง"
      },
      {
        "key": "ข",
        "text": "ขั้นตอนวิธีการทำงานที่มีลำดับชัดเจนเพื่อแก้ปัญหา"
      },
      {
        "key": "ค",
        "text": "อุปกรณ์ฮาร์ดแวร์สำหรับประมวลผล"
      },
      {
        "key": "ง",
        "text": "ผลลัพธ์ที่ได้จากการรันโปรแกรม"
      }
    ],
    "answer": "ข",
    "explanation": "อัลกอริทึม คือลำดับขั้นตอนที่ชัดเจนในการแก้ปัญหา"
  },
  {
    "id": 22,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดไม่ใช่คุณสมบัติที่ดีของอัลกอริทึม?",
    "options": [
      {
        "key": "ก",
        "text": "มีจุดเริ่มต้นและจุดสิ้นสุดที่ชัดเจน"
      },
      {
        "key": "ข",
        "text": "มีขั้นตอนคลุมเครือเพื่อให้ปรับเปลี่ยนได้ตามใจชอบ"
      },
      {
        "key": "ค",
        "text": "แต่ละขั้นตอนสั้นและกระชับ"
      },
      {
        "key": "ง",
        "text": "ให้ผลลัพธ์ที่ถูกต้อง"
      }
    ],
    "answer": "ข",
    "explanation": "อัลกอริทึมต้องมีความชัดเจน ไม่คลุมเครือ"
  },
  {
    "id": 23,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การเขียนอธิบายขั้นตอนการทำงานโดยใช้ภาษาพูดผสมสัญลักษณ์ทางคณิตศาสตร์เรียกว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Flowchart"
      },
      {
        "key": "ข",
        "text": "Pseudo-code"
      },
      {
        "key": "ค",
        "text": "Source code"
      },
      {
        "key": "ง",
        "text": "Machine code"
      }
    ],
    "answer": "ข",
    "explanation": "รหัสเทียม (Pseudo-code) คือคำอธิบายขั้นตอนด้วยภาษาพูด"
  },
  {
    "id": 24,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์รูปสี่เหลี่ยมข้าวหลามตัด (Diamond) ในผังงาน (Flowchart) ใช้แทนการทำงานใด?",
    "options": [
      {
        "key": "ก",
        "text": "จุดเริ่มต้น/จบ"
      },
      {
        "key": "ข",
        "text": "การประมวลผล (Process)"
      },
      {
        "key": "ค",
        "text": "การตัดสินใจ/เงื่อนไข (Decision/Condition)"
      },
      {
        "key": "ง",
        "text": "การแสดงผลออกทางจอภาพ"
      }
    ],
    "answer": "ค",
    "explanation": "สี่เหลี่ยมข้าวหลามตัดใช้แทนการตัดสินใจหรือเลือกเงื่อนไข (Decision)"
  },
  {
    "id": 25,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ผังงานใดใช้แสดงการประมวลผลหรือกำหนดค่า (Process)?",
    "options": [
      {
        "key": "ก",
        "text": "วงกลม (Connector)"
      },
      {
        "key": "ข",
        "text": "สี่เหลี่ยมผืนผ้า (Rectangle)"
      },
      {
        "key": "ค",
        "text": "สี่เหลี่ยมข้าวหลามตัด (Diamond)"
      },
      {
        "key": "ง",
        "text": "สี่เหลี่ยมด้านขนาน (Parallelogram)"
      }
    ],
    "answer": "ข",
    "explanation": "สี่เหลี่ยมผืนผ้าใช้แทนการประมวลผล (Process)"
  },
  {
    "id": 26,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดคือประโยชน์หลักของการเขียนผังงาน (Flowchart)?",
    "options": [
      {
        "key": "ก",
        "text": "ช่วยให้คอมพิวเตอร์ประมวลผลได้เร็วขึ้น"
      },
      {
        "key": "ข",
        "text": "ช่วยให้เห็นลำดับการทำงานและตรรกะของโปรแกรมได้ชัดเจน"
      },
      {
        "key": "ค",
        "text": "ป้องกันไม่ให้เกิดไวรัสคอมพิวเตอร์"
      },
      {
        "key": "ง",
        "text": "ทำให้ไม่ต้องเขียนโค้ดโปรแกรม"
      }
    ],
    "answer": "ข",
    "explanation": "ผังงานช่วยถ่ายทอดตรรกะและลำดับขั้นตอนให้เข้าใจง่ายด้วยรูปภาพ"
  },
  {
    "id": 27,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การวิเคราะห์ปัญหาแบ่งเป็น 3 ขั้นตอนหลัก ข้อใดเรียงลำดับถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Process -> Input -> Output"
      },
      {
        "key": "ข",
        "text": "Input -> Process -> Output"
      },
      {
        "key": "ค",
        "text": "Output -> Input -> Process"
      },
      {
        "key": "ง",
        "text": "Input -> Output -> Process"
      }
    ],
    "answer": "ข",
    "explanation": "การวิเคราะห์ปัญหาเรียงจาก Input -> Process -> Output"
  },
  {
    "id": 28,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์รูปสี่เหลี่ยมด้านขนาน (Parallelogram) ในผังงานใช้ทำหน้าที่ใด?",
    "options": [
      {
        "key": "ก",
        "text": "การรับค่าข้อมูลเข้าหรือแสดงผลโดยไม่ระบุอุปกรณ์ (General Input/Output)"
      },
      {
        "key": "ข",
        "text": "การวนซ้ำ (Loop)"
      },
      {
        "key": "ค",
        "text": "จุดเชื่อมต่อหน้ากระดาษ"
      },
      {
        "key": "ง",
        "text": "การประมวลผลคำนวณ"
      }
    ],
    "answer": "ก",
    "explanation": "สี่เหลี่ยมด้านขนานใช้แสดง General Input/Output"
  },
  {
    "id": 29,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์รูปทรงวงมน หรือสี่เหลี่ยมผืนผ้าขอบมน ในผังงานแสดงถึงสิ่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "Start / End (จุดเริ่มต้น หรือ จุดสิ้นสุด)"
      },
      {
        "key": "ข",
        "text": "Manual Input"
      },
      {
        "key": "ค",
        "text": "Display บนหน้าจอ"
      },
      {
        "key": "ง",
        "text": "Document"
      }
    ],
    "answer": "ก",
    "explanation": "รูปทรงวงมน/ขอบมน ใช้แสดงจุด Start และ End"
  },
  {
    "id": 30,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "หากต้องการเชื่อมต่อผังงานที่อยู่ต่างหน้ากระดาษกัน ควรใช้สัญลักษณ์ใด?",
    "options": [
      {
        "key": "ก",
        "text": "Small Circle Connector"
      },
      {
        "key": "ข",
        "text": "Off-page Connector"
      },
      {
        "key": "ค",
        "text": "Decision Diamond"
      },
      {
        "key": "ง",
        "text": "Process Rectangle"
      }
    ],
    "answer": "ข",
    "explanation": "Off-page Connector ใช้เชื่อมต่อผังงานที่ข้ามไปอยู่คนละหน้ากระดาษ"
  },
  {
    "id": 31,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การออกแบบการแก้ปัญหาแบบ Top-down design หมายถึงข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "เขียนโค้ดจากล่างขึ้นบน"
      },
      {
        "key": "ข",
        "text": "เขียนขั้นตอนหลักก่อนแล้วค่อยแตกออกเป็นขั้นตอนย่อยๆ"
      },
      {
        "key": "ค",
        "text": "ทำงานเฉพาะส่วนท้ายก่อน"
      },
      {
        "key": "ง",
        "text": "รวมขั้นตอนย่อยเข้าเป็นขั้นตอนใหญ่เพียงขั้นตอนเดียว"
      }
    ],
    "answer": "ข",
    "explanation": "Top-down design คือการเขียนขั้นตอนหลักก่อนแล้วค่อยแตกรายละเอียดลงไป"
  },
  {
    "id": 32,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดคือลักษณะของ Pseudo-code ที่ดี?",
    "options": [
      {
        "key": "ก",
        "text": "ขึ้นกับภาษาใดภาษาหนึ่งโดยเฉพาะ เช่น ต้องเป็นโครงสร้าง Python เท่านั้น"
      },
      {
        "key": "ข",
        "text": "อ่านเข้าใจง่าย ไม่ขึ้นกับภาษาคอมพิวเตอร์ใดภาษาหนึ่ง"
      },
      {
        "key": "ค",
        "text": "ต้องมีสัญลักษณ์รูปภาพประกอบเสมอ"
      },
      {
        "key": "ง",
        "text": "ต้องยาวและซับซ้อน"
      }
    ],
    "answer": "ข",
    "explanation": "Pseudo-code ต้องอ่านเข้าใจง่าย ไม่ยึดติดกับไวยากรณ์ภาษาโปรแกรมใด"
  },
  {
    "id": 33,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "จากอัลกอริทึมการรับค่าตัวเลข 2 จำนวนแล้วหาค่ามากสุด ขั้นตอนการเปรียบเทียบจัดเป็นอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Input"
      },
      {
        "key": "ข",
        "text": "Process"
      },
      {
        "key": "ค",
        "text": "Output"
      },
      {
        "key": "ง",
        "text": "Storage"
      }
    ],
    "answer": "ข",
    "explanation": "การเปรียบเทียบจัดเป็นขั้นตอนการประมวลผล (Process)"
  },
  {
    "id": 34,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ทิศทางการทำงานในผังงานโดยทั่วไปจะเรียงลำดับอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "จากล่างขึ้นบน"
      },
      {
        "key": "ข",
        "text": "จากบนลงล่าง และ จากซ้ายไปขวา"
      },
      {
        "key": "ค",
        "text": "จากขวาไปซ้าย"
      },
      {
        "key": "ง",
        "text": "วนเป็นวงกลมเสมอ"
      }
    ],
    "answer": "ข",
    "explanation": "ผังงานสากลเขียนจาก บนลงล่าง และ ซ้ายไปขวา"
  },
  {
    "id": 35,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ลูกศร (Flow line) ในผังงานทำหน้าที่อะไร?",
    "options": [
      {
        "key": "ก",
        "text": "แสดงประเภทข้อมูล"
      },
      {
        "key": "ข",
        "text": "แสดงทิศทางและลำดับขั้นตอนการทำงาน"
      },
      {
        "key": "ค",
        "text": "แทนค่าตัวแปร"
      },
      {
        "key": "ง",
        "text": "เชื่อมต่อเงื่อนไข"
      }
    ],
    "answer": "ข",
    "explanation": "ลูกศร (Flow line) ใช้กำหนดทิศทางลำดับการทำงาน"
  },
  {
    "id": 36,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "หากต้องการรับค่าจากแป้นพิมพ์ในผังงานแบบระบุอุปกรณ์เฉพาะ สามารถใช้สัญลักษณ์ใด?",
    "options": [
      {
        "key": "ก",
        "text": "Manual Input"
      },
      {
        "key": "ข",
        "text": "Process"
      },
      {
        "key": "ค",
        "text": "Decision"
      },
      {
        "key": "ง",
        "text": "Terminator"
      }
    ],
    "answer": "ก",
    "explanation": "Manual Input (สี่เหลี่ยมสโลป) ใช้แสดงการรับค่าจากแป้นพิมพ์โดยตรง"
  },
  {
    "id": 37,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ในการเขียนผังงาน จุดเริ่มต้น (Start) และจุดจบ (End) ในหนึ่งผังงานควรมีกี่จุด?",
    "options": [
      {
        "key": "ก",
        "text": "Start 1 จุด, End หลายจุดได้แต่ควรมีจุดจบที่ชัดเจน"
      },
      {
        "key": "ข",
        "text": "Start หลายจุดได้"
      },
      {
        "key": "ค",
        "text": "ไม่จำเป็นต้องมี End"
      },
      {
        "key": "ง",
        "text": "มี Start ได้ไม่จำกัด"
      }
    ],
    "answer": "ก",
    "explanation": "ผังงานต้องมีจุด Start จุดเดียว และมีจุดสิ้นสุดชัดเจน"
  },
  {
    "id": 38,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใด ไม่ใช่ โครงสร้างควบคุมพื้นฐานในอัลกอริทึม?",
    "options": [
      {
        "key": "ก",
        "text": "โครงสร้างแบบเป็นลำดับ (Sequence)"
      },
      {
        "key": "ข",
        "text": "โครงสร้างแบบการเลือกทำ/เงื่อนไข (Selection)"
      },
      {
        "key": "ค",
        "text": "โครงสร้างแบบการวนซ้ำ (Iteration/Loop)"
      },
      {
        "key": "ง",
        "text": "โครงสร้างแบบสุ่มเดา (Randomization)"
      }
    ],
    "answer": "ง",
    "explanation": "โครงสร้างควบคุมหลักมี 3 แบบ: Sequence, Selection, Iteration"
  },
  {
    "id": 39,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การเขียน Pseudo-code คำว่า READ หรือ INPUT มักใช้แทนขั้นตอนใด?",
    "options": [
      {
        "key": "ก",
        "text": "การแสดงผลออกจอภาพ"
      },
      {
        "key": "ข",
        "text": "การรับข้อมูลเข้า"
      },
      {
        "key": "ค",
        "text": "การคำนวณทางคณิตศาสตร์"
      },
      {
        "key": "ง",
        "text": "การจบโปรแกรม"
      }
    ],
    "answer": "ข",
    "explanation": "READ/INPUT ใน Pseudo-code ใช้แทนการรับข้อมูลเข้า"
  },
  {
    "id": 40,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การเขียน Pseudo-code คำว่า PRINT หรือ DISPLAY มักใช้แทนขั้นตอนใด?",
    "options": [
      {
        "key": "ก",
        "text": "การรับข้อมูล"
      },
      {
        "key": "ข",
        "text": "การกำหนดค่าตัวแปร"
      },
      {
        "key": "ค",
        "text": "การแสดงผลลัพธ์"
      },
      {
        "key": "ง",
        "text": "การตรวจสอบเงื่อนไข"
      }
    ],
    "answer": "ค",
    "explanation": "PRINT/DISPLAY ใช้แทนการแสดงผลลัพธ์"
  },
  {
    "id": 41,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ใครคือผู้พัฒนาภาษา Python?",
    "options": [
      {
        "key": "ก",
        "text": "Dennis Ritchie"
      },
      {
        "key": "ข",
        "text": "James Gosling"
      },
      {
        "key": "ค",
        "text": "Guido van Rossum"
      },
      {
        "key": "ง",
        "text": "Linus Torvalds"
      }
    ],
    "answer": "ค",
    "explanation": "Guido van Rossum คือผู้สร้างภาษา Python"
  },
  {
    "id": 42,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ตัวแปลภาษาที่ใช้รันโค้ดภาษา Python เรียกว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Python Compiler"
      },
      {
        "key": "ข",
        "text": "Python Interpreter"
      },
      {
        "key": "ค",
        "text": "Python Assembler"
      },
      {
        "key": "ง",
        "text": "Python Executor"
      }
    ],
    "answer": "ข",
    "explanation": "Python ใช้โปรแกรมแปลภาษาแบบ Interpreter"
  },
  {
    "id": 43,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ภาษา Python เปิดตัวเผยแพร่สู่สาธารณะครั้งแรกใน ค.ศ. ใด?",
    "options": [
      {
        "key": "ก",
        "text": "1970"
      },
      {
        "key": "ข",
        "text": "1989"
      },
      {
        "key": "ค",
        "text": "1991"
      },
      {
        "key": "ง",
        "text": "2000"
      }
    ],
    "answer": "ค",
    "explanation": "Python เผยแพร่เวอร์ชันแรก (0.9.0) ในปี ค.ศ. 1991"
  },
  {
    "id": 44,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่งแสดงผลข้อความออกทางหน้าจอในภาษา Python คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "console.log()"
      },
      {
        "key": "ข",
        "text": "System.out.println()"
      },
      {
        "key": "ค",
        "text": "print()"
      },
      {
        "key": "ง",
        "text": "echo"
      }
    ],
    "answer": "ค",
    "explanation": "print() ใช้แสดงผลออกทางหน้าจอ"
  },
  {
    "id": 45,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่งใดใช้สำหรับรับข้อมูลจากผู้ใช้ทางแป้นพิมพ์ใน Python?",
    "options": [
      {
        "key": "ก",
        "text": "get()"
      },
      {
        "key": "ข",
        "text": "read()"
      },
      {
        "key": "ค",
        "text": "input()"
      },
      {
        "key": "ง",
        "text": "scanf()"
      }
    ],
    "answer": "ค",
    "explanation": "input() ใช้รับค่าจากผู้ใช้"
  },
  {
    "id": 46,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่ง input() ใน Python จะคืนค่ากลับมาเป็นข้อมูลชนิดใดเสมอ?",
    "options": [
      {
        "key": "ก",
        "text": "Integer"
      },
      {
        "key": "ข",
        "text": "Float"
      },
      {
        "key": "ค",
        "text": "String"
      },
      {
        "key": "ง",
        "text": "Boolean"
      }
    ],
    "answer": "ค",
    "explanation": "ค่าที่รับจาก input() จะมีชนิดเป็น String เสมอ"
  },
  {
    "id": 47,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "โครงสร้างคำสั่งเงื่อนไขใน Python ข้อใดถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "if condition { }"
      },
      {
        "key": "ข",
        "text": "if (condition) then"
      },
      {
        "key": "ค",
        "text": "if condition:"
      },
      {
        "key": "ง",
        "text": "if condition begin"
      }
    ],
    "answer": "ค",
    "explanation": "เงื่อนไขใน Python ขึ้นต้นด้วย if ตามด้วยเงื่อนไขและปิดด้วยเครื่องหมายโคลอน :"
  },
  {
    "id": 48,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ภาษา Python ใช้สิ่งใดในการจัดกลุ่มบล็อกของโค้ด (Block of Code)?",
    "options": [
      {
        "key": "ก",
        "text": "เครื่องหมายปีกกา { }"
      },
      {
        "key": "ข",
        "text": "การย่อหน้า (Indentation / Tab / Space)"
      },
      {
        "key": "ค",
        "text": "เครื่องหมาย BEGIN ... END"
      },
      {
        "key": "ง",
        "text": "เครื่องหมายสี่เหลี่ยม [ ]"
      }
    ],
    "answer": "ข",
    "explanation": "Python ใช้การย่อหน้า (Indentation) ในการแบ่งบล็อกโค้ด"
  },
  {
    "id": 49,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่งเงื่อนไขใดใน Python ใช้เมื่อต้องการตรวจสอบหลายเงื่อนไขถัดจาก if?",
    "options": [
      {
        "key": "ก",
        "text": "else if"
      },
      {
        "key": "ข",
        "text": "elif"
      },
      {
        "key": "ค",
        "text": "then"
      },
      {
        "key": "ง",
        "text": "switch"
      }
    ],
    "answer": "ข",
    "explanation": "elif ใช้สำหรับการตรวจสอบเงื่อนไขถัดไป"
  },
  {
    "id": 50,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "โครงสร้างการทำงานแบบวนซ้ำชนิดใดจะทำงานตราบเท่าที่เงื่อนไขยังคงเป็นจริง (True)?",
    "options": [
      {
        "key": "ก",
        "text": "if"
      },
      {
        "key": "ข",
        "text": "while"
      },
      {
        "key": "ค",
        "text": "for-else"
      },
      {
        "key": "ง",
        "text": "switch-case"
      }
    ],
    "answer": "ข",
    "explanation": "while จะวนลูปทำซ้ำจนกว่าเงื่อนไขจะกลายเป็น False"
  },
  {
    "id": 51,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "หากต้องการออกจากการทำงานในลูป while ทันที สามารถใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "exit"
      },
      {
        "key": "ข",
        "text": "stop"
      },
      {
        "key": "ค",
        "text": "break"
      },
      {
        "key": "ง",
        "text": "continue"
      }
    ],
    "answer": "ค",
    "explanation": "break ใช้สำหรับหยุดการวนลูปทันที"
  },
  {
    "id": 52,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่ง continue ในลูปมีไว้เพื่ออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "หยุดการทำงานของลูปทันที"
      },
      {
        "key": "ข",
        "text": "ข้ามการทำงานที่เหลือในรอบปัจจุบันแล้วไปเริ่มรอบถัดไป"
      },
      {
        "key": "ค",
        "text": "จบการทำงานของโปรแกรมทั้งหมด"
      },
      {
        "key": "ง",
        "text": "วนลูปซ้ำรอบเดิมอีกครั้ง"
      }
    ],
    "answer": "ข",
    "explanation": "continue ใช้ข้ามโค้ดที่เหลือในรอบนั้น แล้วไปเริ่มรอบถัดไป"
  },
  {
    "id": 53,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "จุดเด่นของภาษา Python เมื่อเทียบกับ C++ หรือ Java คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "โค้ดกระชับ อ่านง่าย จำนวนบรรทัดน้อยกว่า"
      },
      {
        "key": "ข",
        "text": "ไม่ต้องใช้ตัวแปลภาษา"
      },
      {
        "key": "ค",
        "text": "ทำงานเฉพาะบนระบบปฏิบัติการ Windows เท่านั้น"
      },
      {
        "key": "ง",
        "text": "ไม่รองรับการเขียนโปรแกรมเชิงวัตถุ"
      }
    ],
    "answer": "ก",
    "explanation": "Python อ่านง่าย โค้ดสั้น กระชับ"
  },
  {
    "id": 54,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "การเช็กเงื่อนไขซ้อนเงื่อนไข เรียกว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Multi-if"
      },
      {
        "key": "ข",
        "text": "Nest-if"
      },
      {
        "key": "ค",
        "text": "Double-if"
      },
      {
        "key": "ง",
        "text": "Loop-if"
      }
    ],
    "answer": "ข",
    "explanation": "Nest-if คือการใช้คำสั่ง if ซ้อนภายใน if อีกที"
  },
  {
    "id": 55,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "หากกำหนด x = 5 แล้วสั่ง while x > 0: print(x) โดยไม่มีการลดค่า x จะเกิดอะไรขึ้น?",
    "options": [
      {
        "key": "ก",
        "text": "ทำงาน 5 ครั้งแล้วจบ"
      },
      {
        "key": "ข",
        "text": "เกิด Infinite Loop (ลูปไม่สิ้นสุด)"
      },
      {
        "key": "ค",
        "text": "โปรแกรมแจ้ง Error ทันที"
      },
      {
        "key": "ง",
        "text": "ไม่แสดงผลใดๆ"
      }
    ],
    "answer": "ข",
    "explanation": "เงื่อนไข 5 > 0 เป็นจริงตลอดเวลา ทำให้เกิด Infinite Loop"
  },
  {
    "id": 56,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "เครื่องหมายที่ใช้เชื่อมเงื่อนไขใน Python เพื่อให้เป็นจริงทั้งคู่คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "AND"
      },
      {
        "key": "ข",
        "text": "and"
      },
      {
        "key": "ค",
        "text": "&&"
      },
      {
        "key": "ง",
        "text": "&"
      }
    ],
    "answer": "ข",
    "explanation": "Python ใช้คำว่า and เป็นตัวดำเนินการตรรกศาสตร์"
  },
  {
    "id": 57,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "สัญลักษณ์ที่ใช้เริ่มต้นคำอธิบายโค้ด (Comment) บรรทัดเดียวใน Python คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "//"
      },
      {
        "key": "ข",
        "text": "/*"
      },
      {
        "key": "ค",
        "text": "#"
      },
      {
        "key": "ง",
        "text": "--"
      }
    ],
    "answer": "ค",
    "explanation": "เครื่องหมาย # ใช้เขียน Comment บรรทัดเดียว"
  },
  {
    "id": 58,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดแสดงการใช้งาน if-else ถูกต้องตามไวยากรณ์ Python?",
    "options": [
      {
        "key": "ก",
        "text": "if x > 5: print(\"Yes\") else: print(\"No\")"
      },
      {
        "key": "ข",
        "text": "if x > 5: print(\"Yes\") else: print(\"No\")"
      },
      {
        "key": "ค",
        "text": "if x > 5 then print(\"Yes\") else print(\"No\")"
      },
      {
        "key": "ง",
        "text": "if (x > 5) { print(\"Yes\"); } else { print(\"No\"); }"
      }
    ],
    "answer": "ข",
    "explanation": "ข. ถูกต้องตามไวยากรณ์ย่อหน้าของ Python"
  },
  {
    "id": 59,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดคือผลลัพธ์ของโค้ด x = 3; if x > 5: print(\"A\") elif x == 3: print(\"B\") else: print(\"C\")?",
    "options": [
      {
        "key": "ก",
        "text": "A"
      },
      {
        "key": "ข",
        "text": "B"
      },
      {
        "key": "ค",
        "text": "C"
      },
      {
        "key": "ง",
        "text": "B และ C"
      }
    ],
    "answer": "ข",
    "explanation": "x = 3 เข้าเงื่อนไข elif x == 3: จึงพิมพ์ 'B'"
  },
  {
    "id": 60,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "โปรแกรมเมอร์ชาวดัตช์ที่เป็นผู้สร้างภาษา Python มีชื่อว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Bjarne Stroustrup"
      },
      {
        "key": "ข",
        "text": "Guido van Rossum"
      },
      {
        "key": "ค",
        "text": "Tim Berners-Lee"
      },
      {
        "key": "ง",
        "text": "James Gosling"
      }
    ],
    "answer": "ข",
    "explanation": "Guido van Rossum เป็นโปรแกรมเมอร์ชาวดัตช์"
  },
  {
    "id": 61,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "การกำหนดค่าให้กับตัวแปรใน Python ใช้เครื่องหมายใด?",
    "options": [
      {
        "key": "ก",
        "text": "=="
      },
      {
        "key": "ข",
        "text": "="
      },
      {
        "key": "ค",
        "text": ":="
      },
      {
        "key": "ง",
        "text": "<-"
      }
    ],
    "answer": "ข",
    "explanation": "เครื่องหมาย = ใช้สำหรับกำหนดค่าให้ตัวแปร"
  },
  {
    "id": 62,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อมูลชนิดจำนวนเต็มใน Python เรียกว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Float"
      },
      {
        "key": "ข",
        "text": "Integer (int)"
      },
      {
        "key": "ค",
        "text": "String (str)"
      },
      {
        "key": "ง",
        "text": "Boolean (bool)"
      }
    ],
    "answer": "ข",
    "explanation": "จำนวนเต็มคือ Integer (int)"
  },
  {
    "id": 63,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อมูลตัวเลขที่มีจุดทศนิยมจัดเป็นชนิดข้อมูลใด?",
    "options": [
      {
        "key": "ก",
        "text": "Integer"
      },
      {
        "key": "ข",
        "text": "Float"
      },
      {
        "key": "ค",
        "text": "Complex"
      },
      {
        "key": "ง",
        "text": "Character"
      }
    ],
    "answer": "ข",
    "explanation": "ตัวเลขมีทศนิยมคือ Float"
  },
  {
    "id": 64,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือตัวดำเนินการหาเศษจากการหาร (Modulus)?",
    "options": [
      {
        "key": "ก",
        "text": "/"
      },
      {
        "key": "ข",
        "text": "//"
      },
      {
        "key": "ค",
        "text": "%"
      },
      {
        "key": "ง",
        "text": "**"
      }
    ],
    "answer": "ค",
    "explanation": "% (Modulus) ใช้หาเศษจากการหาร"
  },
  {
    "id": 65,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของนิพจน์ 10 // 3 ใน Python คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "3.3333"
      },
      {
        "key": "ข",
        "text": "3"
      },
      {
        "key": "ค",
        "text": "1"
      },
      {
        "key": "ง",
        "text": "3.0"
      }
    ],
    "answer": "ข",
    "explanation": "// คือการหารปัดเศษทิ้ง 10 // 3 = 3"
  },
  {
    "id": 66,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของนิพจน์ 2 ** 3 ใน Python คือเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "6"
      },
      {
        "key": "ข",
        "text": "8"
      },
      {
        "key": "ค",
        "text": "9"
      },
      {
        "key": "ง",
        "text": "5"
      }
    ],
    "answer": "ข",
    "explanation": "** คือตัวดำเนินการยกกำลัง 2^3 = 8"
  },
  {
    "id": 67,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของ 7 % 3 คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "2"
      },
      {
        "key": "ข",
        "text": "1"
      },
      {
        "key": "ค",
        "text": "2.33"
      },
      {
        "key": "ง",
        "text": "0"
      }
    ],
    "answer": "ข",
    "explanation": "7 / 3 = 2 เศษ 1 ดังนั้น 7 % 3 ได้ 1"
  },
  {
    "id": 68,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "หากต้องการเปลี่ยนชนิดข้อมูลจาก String \"123\" ให้เป็น Integer ต้องใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "str(\"123\")"
      },
      {
        "key": "ข",
        "text": "int(\"123\")"
      },
      {
        "key": "ค",
        "text": "float(\"123\")"
      },
      {
        "key": "ง",
        "text": "bool(\"123\")"
      }
    ],
    "answer": "ข",
    "explanation": "int() แปลงข้อความตัวเลขเป็นจำนวนเต็ม"
  },
  {
    "id": 69,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือการตั้งชื่อตัวแปรที่ ถูกต้อง ในภาษา Python?",
    "options": [
      {
        "key": "ก",
        "text": "2my_var"
      },
      {
        "key": "ข",
        "text": "my-var"
      },
      {
        "key": "ค",
        "text": "my_var"
      },
      {
        "key": "ง",
        "text": "class"
      }
    ],
    "answer": "ค",
    "explanation": "my_var ตั้งชื่อถูกต้องตามหลักสากล"
  },
  {
    "id": 70,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือการตั้งชื่อตัวแปรที่ ผิดกฎ ในภาษา Python?",
    "options": [
      {
        "key": "ก",
        "text": "user_age"
      },
      {
        "key": "ข",
        "text": "_total"
      },
      {
        "key": "ค",
        "text": "first-name"
      },
      {
        "key": "ง",
        "text": "score2"
      }
    ],
    "answer": "ค",
    "explanation": "ห้ามใช้เครื่องหมายลบ - ในการตั้งชื่อตัวแปร"
  },
  {
    "id": 71,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ตัวดำเนินการเปรียบเทียบ \"ไม่เท่ากับ\" ใน Python คือสัญลักษณ์ใด?",
    "options": [
      {
        "key": "ก",
        "text": "<>"
      },
      {
        "key": "ข",
        "text": "!="
      },
      {
        "key": "ค",
        "text": "=/="
      },
      {
        "key": "ง",
        "text": "NOT="
      }
    ],
    "answer": "ข",
    "explanation": "!= แทนความหมาย ไม่เท่ากับ"
  },
  {
    "id": 72,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของ not True คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "True"
      },
      {
        "key": "ข",
        "text": "False"
      },
      {
        "key": "ค",
        "text": "None"
      },
      {
        "key": "ง",
        "text": "Error"
      }
    ],
    "answer": "ข",
    "explanation": "not True ตรงข้ามกับ True จึงได้ False"
  },
  {
    "id": 73,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "นิพจน์ (5 > 3) and (2 > 4) ได้ผลลัพธ์เป็นอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "True"
      },
      {
        "key": "ข",
        "text": "False"
      },
      {
        "key": "ค",
        "text": "5"
      },
      {
        "key": "ง",
        "text": "Error"
      }
    ],
    "answer": "ข",
    "explanation": "True and False ผลลัพธ์ได้ False"
  },
  {
    "id": 74,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "นิพจน์ (5 > 3) or (2 > 4) ได้ผลลัพธ์เป็นอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "True"
      },
      {
        "key": "ข",
        "text": "False"
      },
      {
        "key": "ค",
        "text": "2"
      },
      {
        "key": "ง",
        "text": "Error"
      }
    ],
    "answer": "ก",
    "explanation": "True or False ผลลัพธ์ได้ True"
  },
  {
    "id": 75,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ชนิดข้อมูล Boolean ใน Python มีค่าที่เป็นไปได้กี่ค่า อะไรบ้าง?",
    "options": [
      {
        "key": "ก",
        "text": "2 ค่า คือ True และ False"
      },
      {
        "key": "ข",
        "text": "2 ค่า คือ yes และ no"
      },
      {
        "key": "ค",
        "text": "2 ค่า คือ 1 และ 0 เท่านั้น"
      },
      {
        "key": "ง",
        "text": "ไม่จำกัดจำนวนค่า"
      }
    ],
    "answer": "ก",
    "explanation": "Boolean มี 2 ค่าคือ True และ False"
  },
  {
    "id": 76,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อความใน Python ต้องอยู่ภายในเครื่องหมายใด?",
    "options": [
      {
        "key": "ก",
        "text": "Single quote (' ') หรือ Double quote (\" \")"
      },
      {
        "key": "ข",
        "text": "เครื่องหมาย ( )"
      },
      {
        "key": "ค",
        "text": "เครื่องหมาย < >"
      },
      {
        "key": "ง",
        "text": "เครื่องหมาย { }"
      }
    ],
    "answer": "ก",
    "explanation": "String ซ้อนด้วย Single หรือ Double quote ได้"
  },
  {
    "id": 77,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของ str(5) + str(5) ใน Python คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "10"
      },
      {
        "key": "ข",
        "text": "\"55\""
      },
      {
        "key": "ค",
        "text": "\"10\""
      },
      {
        "key": "ง",
        "text": "Error"
      }
    ],
    "answer": "ข",
    "explanation": "'5' + '5' คือการนำข้อความมาต่อกันได้ '55'"
  },
  {
    "id": 78,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของ 10 / 2 ใน Python 3 จะได้ข้อมูลชนิดใดและมีค่าเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "int ค่า 5"
      },
      {
        "key": "ข",
        "text": "float ค่า 5.0"
      },
      {
        "key": "ค",
        "text": "str ค่า \"5\""
      },
      {
        "key": "ง",
        "text": "int ค่า 5.0"
      }
    ],
    "answer": "ข",
    "explanation": "การหารด้วย / ใน Python 3 จะคืนค่าเป็น float (5.0) เสมอ"
  },
  {
    "id": 79,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "คำสั่ง type(3.14) จะคืนค่าผลลัพธ์เป็นอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "<class 'int'>"
      },
      {
        "key": "ข",
        "text": "<class 'float'>"
      },
      {
        "key": "ค",
        "text": "<class 'str'>"
      },
      {
        "key": "ง",
        "text": "<class 'bool'>"
      }
    ],
    "answer": "ข",
    "explanation": "3.14 เป็นทศนิยม ชนิดข้อมูลคือ <class 'float'>"
  },
  {
    "id": 80,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "หากต้องการคำนวณหาความยาวด้าน C ของสามเหลี่ยมมุมฉากจากสูตร C = sqrt(A^2 + B^2) ตัวดำเนินการใดใช้สำหรับยกกำลัง?",
    "options": [
      {
        "key": "ก",
        "text": "^"
      },
      {
        "key": "ข",
        "text": "**"
      },
      {
        "key": "ค",
        "text": "sqrt()"
      },
      {
        "key": "ง",
        "text": "//"
      }
    ],
    "answer": "ข",
    "explanation": "** ใช้ยกกำลัง เช่น A**2 + B**2"
  },
  {
    "id": 81,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "Git จัดเป็นระบบ Version Control ประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "Local VCS"
      },
      {
        "key": "ข",
        "text": "Centralized VCS"
      },
      {
        "key": "ค",
        "text": "Distributed VCS (DVCS)"
      },
      {
        "key": "ง",
        "text": "Monolithic VCS"
      }
    ],
    "answer": "ค",
    "explanation": "Git เป็น Distributed VCS"
  },
  {
    "id": 82,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่งใดใช้เริ่มต้นสร้าง Git Repository เปล่าในโฟลเดอร์ปัจจุบัน?",
    "options": [
      {
        "key": "ก",
        "text": "git start"
      },
      {
        "key": "ข",
        "text": "git create"
      },
      {
        "key": "ค",
        "text": "git init"
      },
      {
        "key": "ง",
        "text": "git new"
      }
    ],
    "answer": "ค",
    "explanation": "git init สร้าง Git Repository ใหม่"
  },
  {
    "id": 83,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "สภาวะใดใน Git ที่เป็นพื้นที่เตรียมไฟล์ก่อนทำการบันทึก (Commit)?",
    "options": [
      {
        "key": "ก",
        "text": "Working Directory"
      },
      {
        "key": "ข",
        "text": "Staging Area"
      },
      {
        "key": "ค",
        "text": "Local Repository"
      },
      {
        "key": "ง",
        "text": "Remote Repository"
      }
    ],
    "answer": "ข",
    "explanation": "Staging Area คือพื้นที่เตรียมไฟล์ก่อน Commit"
  },
  {
    "id": 84,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่งใดใช้ย้ายไฟล์ main.py เข้าสู่ Staging Area?",
    "options": [
      {
        "key": "ก",
        "text": "git commit main.py"
      },
      {
        "key": "ข",
        "text": "git save main.py"
      },
      {
        "key": "ค",
        "text": "git add main.py"
      },
      {
        "key": "ง",
        "text": "git push main.py"
      }
    ],
    "answer": "ค",
    "explanation": "git add <file> ใช้เพิ่มไฟล์เข้า Staging Area"
  },
  {
    "id": 85,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่งในการบันทึกการเปลี่ยนแปลงพร้อมข้อความอธิบายคือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "git commit -m \"Commit message\""
      },
      {
        "key": "ข",
        "text": "git save -m \"Commit message\""
      },
      {
        "key": "ค",
        "text": "git add -m \"Commit message\""
      },
      {
        "key": "ง",
        "text": "git log -m \"Commit message\""
      }
    ],
    "answer": "ก",
    "explanation": "git commit -m 'msg' ใช้บันทึกเปลี่ยนแปลง"
  },
  {
    "id": 86,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่งใดใช้สำหรับตรวจสอบสถานะของไฟล์ใน Working Directory และ Staging Area?",
    "options": [
      {
        "key": "ก",
        "text": "git log"
      },
      {
        "key": "ข",
        "text": "git status"
      },
      {
        "key": "ค",
        "text": "git show"
      },
      {
        "key": "ง",
        "text": "git check"
      }
    ],
    "answer": "ข",
    "explanation": "git status ใช้เช็กสถานะไฟล์"
  },
  {
    "id": 87,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "หากต้องการดูประวัติการ Commit ทั้งหมดแบบย่อในบรรทัดเดียว ต้องใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "git log --short"
      },
      {
        "key": "ข",
        "text": "git log --oneline"
      },
      {
        "key": "ค",
        "text": "git log --summary"
      },
      {
        "key": "ง",
        "text": "git log --brief"
      }
    ],
    "answer": "ข",
    "explanation": "git log --oneline แสดงประวัติแบบบรรทัดเดียว"
  },
  {
    "id": 88,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ในข้อความ Commit (Commit Message) คำว่า feat: มักใช้แจ้งการเปลี่ยนแปลงแบบใด?",
    "options": [
      {
        "key": "ก",
        "text": "แก้ไขบั๊ก (Bug Fix)"
      },
      {
        "key": "ข",
        "text": "เพิ่มฟังก์ชันการทำงานใหม่ (Feature)"
      },
      {
        "key": "ค",
        "text": "ปรับปรุงเอกสาร (Documentation)"
      },
      {
        "key": "ง",
        "text": "ปรับปรุงประสิทธิภาพ (Performance)"
      }
    ],
    "answer": "ข",
    "explanation": "feat: หมายถึงการเพิ่มฟีเจอร์ใหม่"
  },
  {
    "id": 89,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ในข้อความ Commit คำว่า fix: มีไว้สำหรับสิ่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "แก้ไขข้อผิดพลาดหรือบั๊กในระบบ"
      },
      {
        "key": "ข",
        "text": "การปรับโครงสร้างโค้ด"
      },
      {
        "key": "ค",
        "text": "การเพิ่มโมดูลใหม่"
      },
      {
        "key": "ง",
        "text": "การอัปเดตระบบ CI/CD"
      }
    ],
    "answer": "ก",
    "explanation": "fix: หมายถึงการแก้ไขบั๊ก"
  },
  {
    "id": 90,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ไฟล์ .gitignore มีหน้าที่อะไรในโปรเจกต์ Git?",
    "options": [
      {
        "key": "ก",
        "text": "ระบุไฟล์หรือโฟลเดอร์ที่ไม่ต้องการให้ Git ติดตามการเปลี่ยนแปลง"
      },
      {
        "key": "ข",
        "text": "ลบไฟล์ออกจากฮาร์ดดิสก์อัตโนมัติ"
      },
      {
        "key": "ค",
        "text": "ละเว้นการตรวจจับไวรัส"
      },
      {
        "key": "ง",
        "text": "ป้องกันไม่ให้ผู้อื่นแก้ไข Repository"
      }
    ],
    "answer": "ก",
    "explanation": ".gitignore ใช้ระบุไฟล์ที่ไม่ต้องการให้ Git ติดตาม"
  },
  {
    "id": 91,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ประโยชน์หลักของระบบ Version Control System (VCS) คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "ช่วยย้อนกลับไปดูหรือแก้ไขโค้ดเวอร์ชันเก่าได้เสมอ"
      },
      {
        "key": "ข",
        "text": "ช่วยเร่งความเร็วในการรันโปรแกรม"
      },
      {
        "key": "ค",
        "text": "ช่วยกำจัดบั๊กในโค้ดให้อัตโนมัติ"
      },
      {
        "key": "ง",
        "text": "ช่วยแปลภาษา Python เป็น C++"
      }
    ],
    "answer": "ก",
    "explanation": "VCS ช่วยบันทึกประวัติและย้อนกลับเวอร์ชันเก่าได้"
  },
  {
    "id": 92,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่ง git add . (มีจุด) มีความหมายอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "เพิ่มเฉพาะไฟล์ดอทไฟล์ (.env)"
      },
      {
        "key": "ข",
        "text": "เพิ่มไฟล์การเปลี่ยนแปลงทั้งหมดในโฟลเดอร์ปัจจุบันเข้า Staging Area"
      },
      {
        "key": "ค",
        "text": "ลบไฟล์ทั้งหมดใน Staging Area"
      },
      {
        "key": "ง",
        "text": "เลิกติดตามไฟล์ทั้งหมด"
      }
    ],
    "answer": "ข",
    "explanation": "git add . ย้ายไฟล์ทั้งหมดในโฟลเดอร์ปัจจุบันไป Staging"
  },
  {
    "id": 93,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ส่วนประกอบใดของ git log ที่ใช้เป็นรหัสระบุตัวตนของการ Commit แต่ละครั้ง?",
    "options": [
      {
        "key": "ก",
        "text": "Author"
      },
      {
        "key": "ข",
        "text": "Commit Hash"
      },
      {
        "key": "ค",
        "text": "Date"
      },
      {
        "key": "ง",
        "text": "Branch Name"
      }
    ],
    "answer": "ข",
    "explanation": "Commit Hash คือรหัสระบุ Commit แต่ละครั้ง"
  },
  {
    "id": 94,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำว่า docs: ใน Commit Message มีไว้สำหรับการเปลี่ยนแปลงประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "แก้ไขโค้ดระบบหลัก"
      },
      {
        "key": "ข",
        "text": "ปรับปรุงเอกสารประกอบ เช่น README.md"
      },
      {
        "key": "ค",
        "text": "เพิ่มไฟล์ภาพประกอบ"
      },
      {
        "key": "ง",
        "text": "ปรับปรุงระบบฐานข้อมูล"
      }
    ],
    "answer": "ข",
    "explanation": "docs: ใช้สำหรับการแก้ไขหรือเพิ่มเอกสาร"
  },
  {
    "id": 95,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำว่า refactor: ใน Commit Message หมายถึงการกระทำใด?",
    "options": [
      {
        "key": "ก",
        "text": "เพิ่มฟังก์ชันใหม่"
      },
      {
        "key": "ข",
        "text": "ปรับปรุงโครงสร้างโค้ดให้น่าอ่าน/ดีขึ้น โดยไม่เปลี่ยนพฤติกรรมการทำงานของโปรแกรม"
      },
      {
        "key": "ค",
        "text": "แก้บั๊กฉุกเฉินบน Production"
      },
      {
        "key": "ง",
        "text": "อัปเดตแพ็กเกจไลบรารี"
      }
    ],
    "answer": "ข",
    "explanation": "refactor: คือปรับโครงสร้างโค้ดโดยไม่เปลี่ยนผลลัพธ์การทำงาน"
  },
  {
    "id": 96,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ลำดับขั้นตอนการทำงานพื้นฐานกับ Git ข้อใดถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Commit -> Add -> Modify file"
      },
      {
        "key": "ข",
        "text": "Modify file -> Staging Area (git add) -> Repository (git commit)"
      },
      {
        "key": "ค",
        "text": "Push -> Commit -> Add"
      },
      {
        "key": "ง",
        "text": "Commit -> Staging Area -> Working Directory"
      }
    ],
    "answer": "ข",
    "explanation": "Modify -> Staging Area (git add) -> Repository (git commit)"
  },
  {
    "id": 97,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "หากต้องการแก้ไขการกำหนดค่าชื่อผู้ใช้ Git ทั่วทั้งเครื่อง ต้องใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "git config --global user.name \"Your Name\""
      },
      {
        "key": "ข",
        "text": "git set user.name \"Your Name\""
      },
      {
        "key": "ค",
        "text": "git init user.name \"Your Name\""
      },
      {
        "key": "ง",
        "text": "git user \"Your Name\""
      }
    ],
    "answer": "ก",
    "explanation": "git config --global user.name ตั้งค่าชื่อผู้ใช้งาน"
  },
  {
    "id": 98,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ใน Centralized VCS (CVCS) หากเซิร์ฟเวอร์กลางล่ม จะเกิดผลกระทบอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ทำงานต่อได้ปกติไม่มีปัญหา"
      },
      {
        "key": "ข",
        "text": "ผู้พัฒนาจะไม่สามารถบันทึกประวัติหรือทำงานร่วมกันได้"
      },
      {
        "key": "ค",
        "text": "โค้ดในเครื่องของผู้พัฒนาจะหายทั้งหมด"
      },
      {
        "key": "ง",
        "text": "Git จะแปลงเป็น DVCS อัตโนมัติ"
      }
    ],
    "answer": "ข",
    "explanation": "เซิร์ฟเวอร์กลางล่มใน CVCS ทำให้ทำงานร่วมกันไม่ได้"
  },
  {
    "id": 99,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำว่า chore: ใน Commit Message เหมาะสำหรับงานประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "เพิ่มฟีเจอร์ใหญ่"
      },
      {
        "key": "ข",
        "text": "งานจิปาถะ เช่น การอัปเดต Config, Build Script หรือ Dependency"
      },
      {
        "key": "ค",
        "text": "การแก้บั๊กหน้าเว็บ"
      },
      {
        "key": "ง",
        "text": "การทดสอบ Test Case"
      }
    ],
    "answer": "ข",
    "explanation": "chore: ใช้กับงานจิปาถะอื่นๆ เช่น Config, Dependency"
  },
  {
    "id": 100,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "โฟลเดอร์ซ่อนใดที่ Git สร้างขึ้นเพื่อเก็บประวัติและข้อมูลคอนฟิกทั้งหมดของ Repository?",
    "options": [
      {
        "key": "ก",
        "text": ".vcs/"
      },
      {
        "key": "ข",
        "text": ".git/"
      },
      {
        "key": "ค",
        "text": ".repository/"
      },
      {
        "key": "ง",
        "text": ".github/"
      }
    ],
    "answer": "ข",
    "explanation": "โฟลเดอร์ .git/ เก็บประวัติและคอนฟิกทั้งหมดของ Git"
  },
  {
    "id": 101,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้เชื่อมต่อ Local Repository กับ Remote Repository บน GitHub?",
    "options": [
      {
        "key": "ก",
        "text": "git remote add origin <URL>"
      },
      {
        "key": "ข",
        "text": "git connect <URL>"
      },
      {
        "key": "ค",
        "text": "git link origin <URL>"
      },
      {
        "key": "ง",
        "text": "git push origin <URL>"
      }
    ],
    "answer": "ก",
    "explanation": "git remote add origin <URL> ใช้เชื่อมต่อ Remote Repo"
  },
  {
    "id": 102,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้อัปโหลด Commit จากเครื่องตนเองไปยัง Remote Repository?",
    "options": [
      {
        "key": "ก",
        "text": "git pull"
      },
      {
        "key": "ข",
        "text": "git push"
      },
      {
        "key": "ค",
        "text": "git clone"
      },
      {
        "key": "ง",
        "text": "git fetch"
      }
    ],
    "answer": "ข",
    "explanation": "git push ส่ง Commit ขึ้นไปบน Remote"
  },
  {
    "id": 103,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้ดึงประวัติและไฟล์ล่าสุดจาก Remote Repository มาปรับปรุงในเครื่องตนเอง?",
    "options": [
      {
        "key": "ก",
        "text": "git push"
      },
      {
        "key": "ข",
        "text": "git pull"
      },
      {
        "key": "ค",
        "text": "git commit"
      },
      {
        "key": "ง",
        "text": "git branch"
      }
    ],
    "answer": "ข",
    "explanation": "git pull ดึงโค้ดล่าสุดจาก Remote ลงเครื่อง"
  },
  {
    "id": 104,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "หากต้องการคัดลอกโปรเจกต์จาก Remote Repository ลงมาที่เครื่องเป็นครั้งแรก ต้องใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "git copy <URL>"
      },
      {
        "key": "ข",
        "text": "git clone <URL>"
      },
      {
        "key": "ค",
        "text": "git download <URL>"
      },
      {
        "key": "ง",
        "text": "git get <URL>"
      }
    ],
    "answer": "ข",
    "explanation": "git clone คัดลอกโปรเจกต์ลงมาเป็นครั้งแรก"
  },
  {
    "id": 105,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "\"Branch\" ในระบบ Git มีประโยชน์อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ช่วยเร่งความเร็วในการดาวน์โหลดโค้ด"
      },
      {
        "key": "ข",
        "text": "แยกเส้นทางการพัฒนาเพื่อทดลองหรือสร้างฟีเจอร์ใหม่โดยไม่กระทบโค้ดหลัก"
      },
      {
        "key": "ค",
        "text": "บีบอัดขนาดไฟล์ใน Repository"
      },
      {
        "key": "ง",
        "text": "ใช้สำหรับสำรองข้อมูลไปยังคลาวด์อื่น"
      }
    ],
    "answer": "ข",
    "explanation": "Branch ช่วยแยกสายพัฒนาโค้ดไม่ให้กระทบสายหลัก"
  },
  {
    "id": 106,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้สร้าง Branch ใหม่ชื่อ feature-login?",
    "options": [
      {
        "key": "ก",
        "text": "git make branch feature-login"
      },
      {
        "key": "ข",
        "text": "git branch feature-login"
      },
      {
        "key": "ค",
        "text": "git new branch feature-login"
      },
      {
        "key": "ง",
        "text": "git checkout -b feature-login"
      }
    ],
    "answer": "ข",
    "explanation": "git branch <name> ใช้สร้าง Branch ใหม่"
  },
  {
    "id": 107,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้สำหรับสลับไปทำงานยัง Branch ที่ชื่อ feature-login?",
    "options": [
      {
        "key": "ก",
        "text": "git switch feature-login"
      },
      {
        "key": "ข",
        "text": "git checkout feature-login"
      },
      {
        "key": "ค",
        "text": "ถูกทั้ง ก. และ ข."
      },
      {
        "key": "ง",
        "text": "ไม่มีข้อใดถูก"
      }
    ],
    "answer": "ค",
    "explanation": "สลับ Branch ได้ทั้ง git checkout และ git switch"
  },
  {
    "id": 108,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้รวมโค้ดจาก Branch อื่นเข้ามายัง Branch ปัจจุบัน?",
    "options": [
      {
        "key": "ก",
        "text": "git combine <branch-name>"
      },
      {
        "key": "ข",
        "text": "git merge <branch-name>"
      },
      {
        "key": "ค",
        "text": "git join <branch-name>"
      },
      {
        "key": "ง",
        "text": "git connect <branch-name>"
      }
    ],
    "answer": "ข",
    "explanation": "git merge <name> รวมโค้ดจาก Branch อื่น"
  },
  {
    "id": 109,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "Merge Conflict เกิดขึ้นจากสาเหตุใด?",
    "options": [
      {
        "key": "ก",
        "text": "การเชื่อมต่ออินเทอร์เน็ตขาดหายขณะ Push"
      },
      {
        "key": "ข",
        "text": "มีการแก้ไขโค้ดในบรรทัดเดียวกันของไฟล์เดียวกันจาก 2 Branch ที่ต่างกัน แล้วนำมารวมกัน"
      },
      {
        "key": "ค",
        "text": "ลืมใส่ข้อความใน git commit"
      },
      {
        "key": "ง",
        "text": "ใช้เวอร์ชันของ Git ที่เก่าเกินไป"
      }
    ],
    "answer": "ข",
    "explanation": "Merge Conflict เกิดจากการแก้โค้ดบรรทัดเดียวกันจากต่าง Branch"
  },
  {
    "id": 110,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "เมื่อเกิด Merge Conflict ขึ้น โปรแกรมเมอร์ต้องทำอย่างไรเป็นอันดับแรก?",
    "options": [
      {
        "key": "ก",
        "text": "ลบโปรเจกต์ทิ้งแล้ว Clone ใหม่"
      },
      {
        "key": "ข",
        "text": "เปิดไฟล์ที่มีข้อขัดแย้ง เลือกแก้ไขโค้ดให้ถูกต้องด้วยตนเอง แล้วทำการ Commit ใหม่"
      },
      {
        "key": "ค",
        "text": "ปิดเครื่องคอมพิวเตอร์ทันที"
      },
      {
        "key": "ง",
        "text": "สั่ง git push --force ทันที"
      }
    ],
    "answer": "ข",
    "explanation": "ต้องเปิดไฟล์ที่มี Conflict แล้วแก้โค้ดด้วยตนเองก่อน Commit"
  },
  {
    "id": 111,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "แพลตฟอร์มใด ไม่ใช่ บริการ Remote Repository ยอดนิยมสำหรับ Git?",
    "options": [
      {
        "key": "ก",
        "text": "GitHub"
      },
      {
        "key": "ข",
        "text": "GitLab"
      },
      {
        "key": "ค",
        "text": "Bitbucket"
      },
      {
        "key": "ง",
        "text": "Google Drive"
      }
    ],
    "answer": "ง",
    "explanation": "Google Drive ไม่ใช่ Remote Repository สำหรับระบบ Git"
  },
  {
    "id": 112,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ในการทำงานกับ Vi/Vim Editor เมื่อต้องการเข้าสู่โหมดพิมพ์ข้อความ (Insert Mode) ต้องกดปุ่มใด?",
    "options": [
      {
        "key": "ก",
        "text": "ปุ่ม Esc"
      },
      {
        "key": "ข",
        "text": "ปุ่ม i"
      },
      {
        "key": "ค",
        "text": "ปุ่ม :wq"
      },
      {
        "key": "ง",
        "text": "ปุ่ม Enter"
      }
    ],
    "answer": "ข",
    "explanation": "กด i ใน Vi/Vim เพื่อเข้าสู่ Insert Mode"
  },
  {
    "id": 113,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ใน Vi/Vim Editor เมื่อพิมพ์แก้ไขงานเสร็จแล้ว ต้องการบันทึกและออกจากโปรแกรม ต้องกดปุ่มตามข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "กด Esc แล้วพิมพ์ :wq ตามด้วย Enter"
      },
      {
        "key": "ข",
        "text": "กด Ctrl + S แล้วปิดหน้าต่าง"
      },
      {
        "key": "ค",
        "text": "กด i แล้วพิมพ์ exit"
      },
      {
        "key": "ง",
        "text": "กด :q!"
      }
    ],
    "answer": "ก",
    "explanation": "กด Esc แล้วพิมพ์ :wq (write & quit) เพื่อบันทึกแล้วออก"
  },
  {
    "id": 114,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "หากต้องการลบ Branch ชื่อ feature-old ที่ไม่ใช้แล้วใน Local สามารถใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "git branch -d feature-old"
      },
      {
        "key": "ข",
        "text": "git remove branch feature-old"
      },
      {
        "key": "ค",
        "text": "git delete feature-old"
      },
      {
        "key": "ง",
        "text": "git drop branch feature-old"
      }
    ],
    "answer": "ก",
    "explanation": "git branch -d <name> ใช้ลบ Branch"
  },
  {
    "id": 115,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "สัญลักษณ์ใดในไฟล์โค้ดที่ Git แทรกเข้ามาเพื่อแสดงจุดที่เป็น Merge Conflict?",
    "options": [
      {
        "key": "ก",
        "text": "<<<<<<<, =======, >>>>>>>"
      },
      {
        "key": "ข",
        "text": "*******, #######"
      },
      {
        "key": "ค",
        "text": "[CONFLICT START], [CONFLICT END]"
      },
      {
        "key": "ง",
        "text": "<BEGIN>, <END>"
      }
    ],
    "answer": "ก",
    "explanation": "Git ใช้สัญลักษณ์ <<<<<<<, =======, >>>>>>> แสดงตำแหน่ง Conflict"
  },
  {
    "id": 116,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่ง git checkout -b <branch-name> มีผลลัพธ์เท่ากับคำสั่งใดรวมกัน?",
    "options": [
      {
        "key": "ก",
        "text": "git branch + git merge"
      },
      {
        "key": "ข",
        "text": "git branch + git checkout"
      },
      {
        "key": "ค",
        "text": "git init + git add"
      },
      {
        "key": "ง",
        "text": "git pull + git push"
      }
    ],
    "answer": "ข",
    "explanation": "git checkout -b คือการสร้าง Branch และสลับไป Branch นั้นทันที"
  },
  {
    "id": 117,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ชื่อสายพัฒนาหลัก (Default Branch) ใน Git Repository ยุคปัจจุบัน มักใช้ชื่อว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "master หรือ main"
      },
      {
        "key": "ข",
        "text": "home"
      },
      {
        "key": "ค",
        "text": "root"
      },
      {
        "key": "ง",
        "text": "first"
      }
    ],
    "answer": "ก",
    "explanation": "สายพัฒนาหลักนิยมใช้ชื่อ main หรือ master"
  },
  {
    "id": 118,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่ง git remote -v มีไว้สำหรับทำสิ่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "ลบ Remote ที่ไม่ใช้ออก"
      },
      {
        "key": "ข",
        "text": "ตรวจสอบรายชื่อและ URL ของ Remote Repository ที่เชื่อมต่ออยู่"
      },
      {
        "key": "ค",
        "text": "สลับไปใช้ Remote ตัวอื่น"
      },
      {
        "key": "ง",
        "text": "อัปเดตเวอร์ชันของ Git Remote"
      }
    ],
    "answer": "ข",
    "explanation": "git remote -v แสดงรายชื่อ Remote พร้อม URL"
  },
  {
    "id": 119,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "เมื่อเราทำการ git clone <URL> สิ่งใดจะเกิดขึ้น?",
    "options": [
      {
        "key": "ก",
        "text": "ดาวน์โหลดโค้ดเวอร์ชันล่าสุดอย่างเดียวโดยไม่มีประวัติ Git"
      },
      {
        "key": "ข",
        "text": "คัดลอกโปรเจกต์พร้อมประวัติ Commit ทั้งหมดลงมาที่เครื่อง และสร้าง Local Repository ให้อัตโนมัติ"
      },
      {
        "key": "ค",
        "text": "สร้าง Remote Repository ใหม่บน GitHub"
      },
      {
        "key": "ง",
        "text": "ทำการ Merge โค้ดทั้งหมดเข้า Main อัตโนมัติ"
      }
    ],
    "answer": "ข",
    "explanation": "git clone คัดลอก Repository ทั้งหมดพร้อมประวัติ Commit ลงมา"
  },
  {
    "id": 120,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ในการทำงานร่วมกันเป็นทีม ก่อนที่จะเริ่มเขียนโค้ดงานใหม่ทุกครั้ง ควรปฏิบัติตามข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "สั่ง git push ทันที"
      },
      {
        "key": "ข",
        "text": "สั่ง git pull เพื่อดึงโค้ดล่าสุดจาก Remote มาอัปเดตเครื่องตนเองก่อน"
      },
      {
        "key": "ค",
        "text": "สร้าง Repository ใหม่ทันที"
      },
      {
        "key": "ง",
        "text": "ลบ Branch main ทิ้งก่อน"
      }
    ],
    "answer": "ข",
    "explanation": "ควร git pull ดึงโค้ดล่าสุดก่อนเริ่มงานเสมอเพื่อป้องกัน Conflict"
  }
],
  "advanced": [
  {
    "id": 1,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดอธิบายความแตกต่างระหว่าง Compiler และ Interpreter ในแง่ของการจัดการ Memory และ Execution Performance ได้ถูกต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "Compiler ใช้หน่วยความจำน้อยกว่าระหว่าง Execution เพราะไม่ต้องเก็บ Source Code ไว้"
      },
      {
        "key": "ข",
        "text": "Interpreter แปลง Source Code ทั้งหมดเป็น Intermediate Code ก่อนเสมอ ทำให้ประมวลผลรอบถัดไปเร็วขึ้น"
      },
      {
        "key": "ค",
        "text": "Compiler สร้าง Executable File (Machine Code) ทำให้ประมวลผลเร็วกว่า แต่ใช้ Memory สูงกว่าในขั้นตอน Compilation"
      },
      {
        "key": "ง",
        "text": "Interpreter และ Compiler ใช้โครงสร้างการจัดการ Memory ไม่ต่างกัน"
      }
    ],
    "answer": "ค",
    "explanation": "Compiler แปลงทรานสเลททั้งโปรแกรมเป็น Executable File จึงประมวลผลเร็วกว่า แต่ขั้นตอน Compile ใช้ทรัพยากรสูง"
  },
  {
    "id": 2,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ในขั้นตอน System Development Life Cycle (SDLC) ขั้นตอนใดที่หากเกิดความผิดพลาดจะส่งผลกระทบต่อต้นทุนโครงการมากที่สุด (Cost of Change)?",
    "options": [
      {
        "key": "ก",
        "text": "Coding / Implementation"
      },
      {
        "key": "ข",
        "text": "Requirement Analysis & System Design"
      },
      {
        "key": "ค",
        "text": "Testing & Integration"
      },
      {
        "key": "ง",
        "text": "Maintenance"
      }
    ],
    "answer": "ข",
    "explanation": "ความผิดพลาดในขั้นตอนวิเคราะห์/ออกแบบ (Requirement/Design) ส่งผลเสียเป็นลูกคลื่น แก้ไขยากและสิ้นเปลืองงบที่สุด"
  },
  {
    "id": 3,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การประมวลผลแบบ \"Pass-by-Value\" และ \"Pass-by-Reference\" มีผลต่อ Memory Stack และ Heap อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "Pass-by-Value จะคัดลอกข้อมูลลงใน Stack Frame ใหม่ ส่วน Pass-by-Reference ส่งผ่าน Address ของ Memory"
      },
      {
        "key": "ข",
        "text": "Pass-by-Value ใช้ Heap เท่านั้น ส่วน Pass-by-Reference ใช้ Stack เท่านั้น"
      },
      {
        "key": "ค",
        "text": "ทั้งสองแบบสร้าง Copy ของข้อมูลบน Heap เสมอ"
      },
      {
        "key": "ง",
        "text": "Pass-by-Reference ป้องกันไม่ให้ฟังก์ชันแก้ไขค่าเดิมใน Memory"
      }
    ],
    "answer": "ก",
    "explanation": "Pass-by-Value ทำการ Copy ค่าใหม่ลง Stack Frame; Pass-by-Reference ส่ง Address ไป"
  },
  {
    "id": 4,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดคือข้อเสียหลักของภาษาโปรแกรมระดับต่ำ (Low-level Language) เมื่อเปรียบเทียบกับภาษาระดับสูง?",
    "options": [
      {
        "key": "ก",
        "text": "ทำงานได้ช้ากว่าเนื่องจากไม่มี Compiler ช่วย Optimize"
      },
      {
        "key": "ข",
        "text": "ขาด Machine Portability (ขึ้นกับสถาปัตยกรรมของ Hardware)"
      },
      {
        "key": "ค",
        "text": "ไม่สามารถเข้าถึงตำแหน่ง Memory (Pointers) ได้โดยตรง"
      },
      {
        "key": "ง",
        "text": "มี Overhead ของ Memory Management สูงมาก"
      }
    ],
    "answer": "ข",
    "explanation": "Low-level (Assembly/Machine Code) ผูกติดกับ Hardware Architecture ทำให้ย้ายระบบได้ยาก (Not Portable)"
  },
  {
    "id": 5,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดอธิบายแนวคิดเรื่อง Linker ในกระบวนการ Compilation ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "แปลง High-level Code เป็น Assembly Code"
      },
      {
        "key": "ข",
        "text": "รวม Object Files หลายๆ ไฟล์เข้ากับ Library Files เพื่อสร้าง Executable File"
      },
      {
        "key": "ค",
        "text": "โหลด Executable File ลงสู่ RAM เพื่อเตรียมประมวลผล"
      },
      {
        "key": "ง",
        "text": "ตรวจสอบความถูกต้องทางไวยากรณ์ (Syntax Analysis) ของโค้ด"
      }
    ],
    "answer": "ข",
    "explanation": "Linker มีหน้าที่นำ Object files และ Libraries มารวมกันสร้างเป็น .exe"
  },
  {
    "id": 6,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "กระบวนการใดใน Compiler ที่ทำหน้าที่จัดกลุ่ม Character ให้เป็น Tokens?",
    "options": [
      {
        "key": "ก",
        "text": "Lexical Analysis (Scanning)"
      },
      {
        "key": "ข",
        "text": "Syntax Analysis (Parsing)"
      },
      {
        "key": "ค",
        "text": "Semantic Analysis"
      },
      {
        "key": "ง",
        "text": "Code Optimization"
      }
    ],
    "answer": "ก",
    "explanation": "Lexical Analysis (Scanner) แปลงสายตัวอักษรเป็น Tokens"
  },
  {
    "id": 7,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "Semantic Error ต่างจาก Syntax Error อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "Semantic Error เกิดขณะ Compile ส่วน Syntax Error เกิดขณะ Run"
      },
      {
        "key": "ข",
        "text": "Syntax Error ผิดไวยากรณ์ภาษา ส่วน Semantic Error ผิดความหมาย/ตรรกะของการทำงาน"
      },
      {
        "key": "ค",
        "text": "Syntax Error ทำให้โปรแกรม Crash ส่วน Semantic Error ทำให้ Compile ไม่ผ่าน"
      },
      {
        "key": "ง",
        "text": "ทั้งสองแบบมีความหมายเหมือนกัน"
      }
    ],
    "answer": "ข",
    "explanation": "Syntax Error คือผิดกฎไวยากรณ์; Semantic Error คือไวยากรณ์ถูกแต่ความหมาย/ผลลัพธ์ผิด"
  },
  {
    "id": 8,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "แนวคิดเรื่อง High Cohesion และ Low Coupling ในการออกแบบโปรแกรมหมายถึงอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Module ควรมีความเกี่ยวข้องกันเองสูง และลดการพึ่งพา Module อื่น"
      },
      {
        "key": "ข",
        "text": "Module ควรอ้างอิง Module อื่นให้มากที่สุด และลดฟังก์ชันภายใน"
      },
      {
        "key": "ค",
        "text": "โค้ดควรเขียนจบในไฟล์เดียว และใช้ตัวแปร Global เป็นหลัก"
      },
      {
        "key": "ง",
        "text": "เพิ่มความยืดหยุ่นโดยให้ทุก Module เรียกใช้ Memory ชุดเดียวกัน"
      }
    ],
    "answer": "ก",
    "explanation": "หลักการ Modular Design: High Cohesion (ทำหน้าที่เดี่ยวๆ ได้ดี) และ Low Coupling (ขึ้นตรงกับโมดูลอื่นให้น้อยที่สุด)"
  },
  {
    "id": 9,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดเป็นตัวอย่างของ Static Memory Allocation?",
    "options": [
      {
        "key": "ก",
        "text": "การจองอาร์เรย์ด้วยคำสั่ง malloc() หรือ new"
      },
      {
        "key": "ข",
        "text": "การประกาศตัวแปรอาร์เรย์ขนาดคงที่ เช่น int arr[100];"
      },
      {
        "key": "ค",
        "text": "การเพิ่มข้อมูลใน Linked List"
      },
      {
        "key": "ง",
        "text": "การใช้ Dynamic Vector"
      }
    ],
    "answer": "ข",
    "explanation": "การประกาศอาร์เรย์ระบุขนาดคงที่ เกิดขึ้นตอน Compile Time (Static)"
  },
  {
    "id": 10,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การเกิด Stack Overflow มักมีสาเหตุหลักมาจากข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "การจอง Memory ใน Heap มากเกินไป"
      },
      {
        "key": "ข",
        "text": "การทำ Infinite Recursion หรือการเรียกใช้ Local Variables ใน Stack มากเกินขีดจำกัด"
      },
      {
        "key": "ค",
        "text": "การลืม Deallocate Memory ใน C/C++"
      },
      {
        "key": "ง",
        "text": "การอ่านไฟล์ขนาดใหญ่เกินขนาด RAM"
      }
    ],
    "answer": "ข",
    "explanation": "Stack Overflow เกิดเมื่อใช้ Stack Memory เกินขีดจำกัด เช่น Infinite Recursion"
  },
  {
    "id": 11,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "โครงสร้างโปรแกรมแบบ Structured Programming มุ่งเน้นการหลีกเลี่ยงคำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "for loop"
      },
      {
        "key": "ข",
        "text": "switch-case"
      },
      {
        "key": "ค",
        "text": "goto"
      },
      {
        "key": "ง",
        "text": "return"
      }
    ],
    "answer": "ค",
    "explanation": "Structured Programming เน้น Sequence, Selection, Iteration และหลีกเลี่ยง goto"
  },
  {
    "id": 12,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดคือหน้าที่ของ Loader ในระบบปฏิบัติการ?",
    "options": [
      {
        "key": "ก",
        "text": "แปลงสัญลักษณ์ Assembly เป็น Machine Code"
      },
      {
        "key": "ข",
        "text": "นำ Executable Program จาก Disk ขึ้นสู่ Main Memory (RAM) และเตรียมการประมวลผล"
      },
      {
        "key": "ค",
        "text": "แปลงภาพ Flowchart เป็นซอร์สโค้ด"
      },
      {
        "key": "ง",
        "text": "จัดการการเข้าถึงข้อมูลใน Database"
      }
    ],
    "answer": "ข",
    "explanation": "Loader มีหน้าที่โหลด Executable Code จาก Disk ลงสู่ RAM เพื่อเตรียม Executed"
  },
  {
    "id": 13,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การทำงานของ Garbage Collection ในภาษาอย่าง Java หรือ Python ช่วยแก้ปัญหาใดเป็นหลัก?",
    "options": [
      {
        "key": "ก",
        "text": "Syntax Error"
      },
      {
        "key": "ข",
        "text": "Memory Leak"
      },
      {
        "key": "ค",
        "text": "Deadlock"
      },
      {
        "key": "ง",
        "text": "Stack Overflow"
      }
    ],
    "answer": "ข",
    "explanation": "Garbage Collection ช่วย คืนพื้นที่ Memory ที่ไม่ได้ใช้งานแล้วโดยอัตโนมัติ ป้องกัน Memory Leak"
  },
  {
    "id": 14,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ในการคำนวณประสิทธิภาพอัลกอริทึม Big-O Notation ตัวใดแสดงถึงความซับซ้อนที่แย่ที่สุด (Worst Efficiency)?",
    "options": [
      {
        "key": "ก",
        "text": "O(1)"
      },
      {
        "key": "ข",
        "text": "O(n log n)"
      },
      {
        "key": "ค",
        "text": "O(n^2)"
      },
      {
        "key": "ง",
        "text": "O(2^n)"
      }
    ],
    "answer": "ง",
    "explanation": "O(2^n) เป็น Exponential time มีความซับซ้อนและประสิทธิภาพแย่ที่สุดในตัวเลือก"
  },
  {
    "id": 15,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดไม่ใช่ขั้นตอนมาตรฐานในพัฒนาซอฟต์แวร์แบบ Waterfall Model?",
    "options": [
      {
        "key": "ก",
        "text": "Feasibility Study"
      },
      {
        "key": "ข",
        "text": "Requirement Analysis"
      },
      {
        "key": "ค",
        "text": "Sprint Planning"
      },
      {
        "key": "ง",
        "text": "Integration & Testing"
      }
    ],
    "answer": "ค",
    "explanation": "Sprint Planning เป็นขั้นตอนของ Agile/Scrum ไม่ใช่ Waterfall Model"
  },
  {
    "id": 16,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดคือคำอธิบายของ \"Paradigm\" การเขียนโปรแกรมแบบ Functional Programming?",
    "options": [
      {
        "key": "ก",
        "text": "มุ่งเน้นการเปลี่ยนแปลง State ของวัตถุ (Objects)"
      },
      {
        "key": "ข",
        "text": "มองการคำนวณเป็นการประมวลผลฟังก์ชันทางคณิตศาสตร์และหลีกเลี่ยง Mutable Data"
      },
      {
        "key": "ค",
        "text": "เขียนคำสั่งควบคุมตามลำดับ บรรทัดต่อบรรทัด"
      },
      {
        "key": "ง",
        "text": "ขับเคลื่อนการทำงานผ่าน Event เช่น การคลิกเมาส์"
      }
    ],
    "answer": "ข",
    "explanation": "Functional Programming มองการประมวลผลเป็น Pure Functions และหลีกเลี่ยงการเปลี่ยน State"
  },
  {
    "id": 17,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ในการแก้ไข Bug ประเภท Logic Error วิธีใดมีประสิทธิภาพสูงสุดในการหาจุดผิดพลาด?",
    "options": [
      {
        "key": "ก",
        "text": "Re-compiling Code"
      },
      {
        "key": "ข",
        "text": "Code Dry-Run (Trace Table) และการใช้ Debugger (Breakpoints)"
      },
      {
        "key": "ค",
        "text": "เปลี่ยนไปใช้ Compiler ตัวอื่น"
      },
      {
        "key": "ง",
        "text": "เพิ่มขนาด Memory ของระบบ"
      }
    ],
    "answer": "ข",
    "explanation": "การทำ Trace Table และการสร้าง Breakpoint บน Debugger ช่วยหา Logic Error ได้ตรงจุดที่สุด"
  },
  {
    "id": 18,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ไฟล์นามสกุล .obj หรือ .o จัดอยู่ในประเภทใดในกระบวนการเขียนโปรแกรม?",
    "options": [
      {
        "key": "ก",
        "text": "Source Code File"
      },
      {
        "key": "ข",
        "text": "Object File (Machine Code ที่ยังไม่ได้ Link)"
      },
      {
        "key": "ค",
        "text": "Executable File"
      },
      {
        "key": "ง",
        "text": "Header File"
      }
    ],
    "answer": "ข",
    "explanation": "ไฟล์ .obj คือ Machine code จากการ Compile ซอร์สโค้ด แต่ยังไม่ได้ผ่านการ Link"
  },
  {
    "id": 19,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดอธิบายขอบเขตของตัวแปรประเภท \"Global Variable\" ได้ถูกต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "สามารถเข้าถึงได้เฉพาะภายในฟังก์ชันที่ประกาศไว้เท่านั้น"
      },
      {
        "key": "ข",
        "text": "อยู่ใน Memory สั้นๆ และถูกทำลายเมื่อจบ Block {}"
      },
      {
        "key": "ค",
        "text": "สามารถเข้าถึงและแก้ไขได้จากทุกส่วนของโปรแกรม และคงอยู่ตลอดอายุการทำงานของโปรแกรม"
      },
      {
        "key": "ง",
        "text": "ถูกจัดเก็บใน CPU Register เสมอ"
      }
    ],
    "answer": "ค",
    "explanation": "Global Variable มีอายุคงอยู่ตลอดระยะเวลาการทำงานของโปรแกรม และเข้าถึงได้จากทุกส่วน"
  },
  {
    "id": 20,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "คำว่า \"Portability\" ในซอฟต์แวร์หมายถึงอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "ความสามารถในการรันซอฟต์แวร์บนระบบปฏิบัติการ/สถาปัตยกรรมที่หลากหลายโดยดัดแปลงน้อยที่สุด"
      },
      {
        "key": "ข",
        "text": "ความเร็วในการประมวลผลข้อมูลขนาดใหญ่"
      },
      {
        "key": "ค",
        "text": "ความปลอดภัยจากการถูกแฮก"
      },
      {
        "key": "ง",
        "text": "การประหยัดพื้นที่บน Hard Disk Session 2: Flowcharts, Pseudocode & Algorithms (ข้อ 21 - 40)"
      }
    ],
    "answer": "ก",
    "explanation": "Portability คือความสามารถในการนำโปรแกรมไปรันข้าม Platform ต่างๆ ได้ง่าย"
  },
  {
    "id": 21,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์รูป \"เพชร\" (Decision/Diamond) ใน ผังงาน (Flowchart) จะต้องมีเส้นทางออกจากสัญลักษณ์อย่างน้อยกี่เส้นทาง?",
    "options": [
      {
        "key": "ก",
        "text": "1 เส้นทาง"
      },
      {
        "key": "ข",
        "text": "2 เส้นทาง"
      },
      {
        "key": "ค",
        "text": "3 เส้นทาง"
      },
      {
        "key": "ง",
        "text": "ไม่จำกัด"
      }
    ],
    "answer": "ข",
    "explanation": "สัญลักษณ์การตัดสินใจ (Decision) ต้องมีทางออกอย่างน้อย 2 ทางเสมอ (เช่น Yes/No, True/False)"
  },
  {
    "id": 22,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "จงหาผลลัพธ์ของ Pseudocode ต่อไปนี้: SET X = 10, Y = 20 X = X + Y Y = X - Y X = X - Y PRINT X, Y",
    "options": [
      {
        "key": "ก",
        "text": "10, 20"
      },
      {
        "key": "ข",
        "text": "20, 10"
      },
      {
        "key": "ค",
        "text": "30, -10"
      },
      {
        "key": "ง",
        "text": "30, 20"
      }
    ],
    "answer": "ข",
    "explanation": "เทคนิคการ Swap ค่า: X=10+20=30, Y=30-20=10, X=30-10=20 ได้ผลลัพธ์ X=20, Y=10"
  },
  {
    "id": 23,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "โครงสร้างสัญลักษณ์ Flowchart สำหรับการวนซ้ำแบบ Do-While แตกต่างจาก While อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "Do-While ตรวจสอบเงื่อนไขก่อนทำรอบแรกเสมอ"
      },
      {
        "key": "ข",
        "text": "Do-While ทำงานใน Block อย่างน้อย 1 รอบก่อนตรวจสอบเงื่อนไข"
      },
      {
        "key": "ค",
        "text": "While สามารถมีเส้นทางออกจาก Decision ได้ 3 ทาง"
      },
      {
        "key": "ง",
        "text": "ไม่มีความแตกต่างกันเชิงโครงสร้าง"
      }
    ],
    "answer": "ข",
    "explanation": "Do-While ทำงานใน Loop อย่างน้อย 1 รอบก่อนตรวจสอบเงื่อนไขที่ด้านล่าง"
  },
  {
    "id": 24,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดคือ Pseudocode ที่ใช้การทำงานแบบ Nested Loop ที่ถูกต้องในการสร้างตารางขนาด N x M?",
    "options": [
      {
        "key": "ก",
        "text": "FOR i = 1 TO N FOR j = 1 TO M PRINT \"*\" END FOR END FOR"
      },
      {
        "key": "ข",
        "text": "FOR i = 1 TO N AND j = 1 TO M PRINT \"*\" END FOR"
      },
      {
        "key": "ค",
        "text": "WHILE i < N PRINT \"*\" END WHILE"
      },
      {
        "key": "ง",
        "text": "IF i < N THEN FOR j = 1 TO M PRINT \"*\" END IF"
      }
    ],
    "answer": "ก",
    "explanation": "ลูปซ้อนลูปที่ถูกต้องสำหรับการสร้างตาราง N x M"
  },
  {
    "id": 25,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "หากพิจารณาอัลกอริทึมการค้นหาข้อมูลแบบ Binary Search เงื่อนไขเบื้องต้น (Prerequisite) ของข้อมูลนำเข้าคืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "ข้อมูลต้องมีจำนวนเป็นเลขคู่"
      },
      {
        "key": "ข",
        "text": "ข้อมูลต้องถูกจัดเรียงลำดับ (Sorted) อยู่แล้ว"
      },
      {
        "key": "ค",
        "text": "ข้อมูลต้องเก็บอยู่ใน Linked List เท่านั้น"
      },
      {
        "key": "ง",
        "text": "ข้อมูลห้ามมีค่าซ้ำกัน"
      }
    ],
    "answer": "ข",
    "explanation": "Binary Search จำเป็นต้องใช้กับข้อมูลที่ผ่านการจัดเรียง (Sorted) แล้วเท่านั้น"
  },
  {
    "id": 26,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ Off-page Connector ใน Flowchart ใช้เมื่อใด?",
    "options": [
      {
        "key": "ก",
        "text": "เมื่อต้องการเชื่อมจุดตัดภายในหน้าเดียวกัน"
      },
      {
        "key": "ข",
        "text": "เมื่อผังงานยาวเกินหน้ากระดาษปัจจุบันและต้องต่อขึ้นหน้าใหม่"
      },
      {
        "key": "ค",
        "text": "เมื่อต้องการแสดงการอ่านข้อมูลจากไฟล์เอกสาร"
      },
      {
        "key": "ง",
        "text": "เมื่อต้องรับค่า Input จากแป้นพิมพ์"
      }
    ],
    "answer": "ข",
    "explanation": "Off-page Connector (สัญลักษณ์บ้าน/ห้าเหลี่ยม) ใช้เชื่อมต่อผังงานข้ามหน้ากระดาษ"
  },
  {
    "id": 27,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดจัดเป็นข้อผิดพลาดแบบ Infinite Loop ใน Pseudocode?",
    "options": [
      {
        "key": "ก",
        "text": "FOR i = 1 TO 10 STEP 1"
      },
      {
        "key": "ข",
        "text": "i = 10; WHILE i > 0 DO { i = i + 1; }"
      },
      {
        "key": "ค",
        "text": "i = 0; WHILE i < 5 DO { i = i + 1; }"
      },
      {
        "key": "ง",
        "text": "FOR i = 10 DOWNTO 1"
      }
    ],
    "answer": "ข",
    "explanation": "i = 10 และเพิ่มค่า i = i + 1 เรื่อยๆ ทำให้เงื่อนไข i > 0 เป็นจริงตลอดกาล เกิด Infinite Loop"
  },
  {
    "id": 28,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "พิจารณา Pseudocode ต่อไปนี้ หากกำหนดให้ A = [3, 8, 2, 5, 1] ค่าของ MAX คือเท่าใดหลังจบโปรแกรม? SET MAX = A[0] FOR i = 1 TO 4 IF A[i] > MAX THEN MAX = A[i] END IF END FOR",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "5"
      },
      {
        "key": "ค",
        "text": "8"
      },
      {
        "key": "ง",
        "text": "1"
      }
    ],
    "answer": "ค",
    "explanation": "อัลกอริทึมค้นหาค่าสูงสุด ในอาร์เรย์ [3, 8, 2, 5, 1] ค่าสูงสุดคือ 8"
  },
  {
    "id": 29,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "เทคนิค Top-Down Design ในการเขียน Pseudocode และ Algorithm คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "เขียนโค้ดจากบรรทัดล่างสุดขึ้นบน"
      },
      {
        "key": "ข",
        "text": "แตกปัญหาใหญ่ให้ออกเป็นปัญหาย่อยๆ (Sub-problems) ที่จัดการได้ง่ายขึ้นตามลำดับ"
      },
      {
        "key": "ค",
        "text": "การทดสอบระบบด้วยการจำลองข้อมูลจริง"
      },
      {
        "key": "ง",
        "text": "การแปลง Pseudocode ให้เป็น Machine Code โดยตรง"
      }
    ],
    "answer": "ข",
    "explanation": "Top-Down Design คือการย่อยปัญหาใหญ่ให้ออกเป็นปัญหาย่อยๆ (Decomposition)"
  },
  {
    "id": 30,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์สี่เหลี่ยมผืนผ้า (Rectangle) ใน Flowchart ใช้แทนการทำงานประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "Input/Output"
      },
      {
        "key": "ข",
        "text": "Process / Calculation / Assignment"
      },
      {
        "key": "ค",
        "text": "Start / End"
      },
      {
        "key": "ง",
        "text": "Manual Operation"
      }
    ],
    "answer": "ข",
    "explanation": "สี่เหลี่ยมผืนผ้า คือ Process / Calculation / Assignment"
  },
  {
    "id": 31,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "อัลกอริทึมประเภท Divide and Conquer มีลักษณะการทำงานตามข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "แก้ปัญหาทีละขั้นตอนเรียงตามลำดับอย่างตรงไปตรงมา"
      },
      {
        "key": "ข",
        "text": "แบ่งปัญหาเป็นส่วนย่อย แก้ปัญหาแต่ละส่วน แล้วนำผลลัพธ์มารวมกัน"
      },
      {
        "key": "ค",
        "text": "สุ่มเลือกทางเลือกเพื่อหาคำตอบที่ยอมรับได้"
      },
      {
        "key": "ง",
        "text": "ย้อนกลับไปทำขั้นตอนแรกใหม่เสมอหากคำตอบยังไม่ดีที่สุด"
      }
    ],
    "answer": "ข",
    "explanation": "Divide and Conquer: แบ่ง ย่อย และรวมผลลัพธ์ (เช่น Merge Sort, Quick Sort)"
  },
  {
    "id": 32,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "คำสั่ง STEP -2 ในการวนซ้ำ FOR i = 10 TO 1 STEP -2 จะทำให้ลูปทำงานทั้งหมดกี่รอบ?",
    "options": [
      {
        "key": "ก",
        "text": "4 รอบ"
      },
      {
        "key": "ข",
        "text": "5 รอบ"
      },
      {
        "key": "ค",
        "text": "6 รอบ"
      },
      {
        "key": "ง",
        "text": "10 รอบ"
      }
    ],
    "answer": "ข",
    "explanation": "รอบที่ i = 10, 8, 6, 4, 2 รวมทั้งหมด 5 รอบ"
  },
  {
    "id": 33,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "พิจารณาการคำนวณค่า N! (Factorial) แบบ Recursion เงื่อนไข Base Case ที่จำเป็นคืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "IF N > 1 RETURN N * Fact(N-1)"
      },
      {
        "key": "ข",
        "text": "IF N == 0 OR N == 1 RETURN 1"
      },
      {
        "key": "ค",
        "text": "IF N < 0 RETURN N"
      },
      {
        "key": "ง",
        "text": "WHILE N > 0 DO N--"
      }
    ],
    "answer": "ข",
    "explanation": "Base Case ของ Factorial คือ 0! = 1 หรือ 1! = 1"
  },
  {
    "id": 34,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ใดใน Flowchart ที่ใช้รับข้อมูลโดยไม่ระบุประเภทอุปกรณ์สื่อสาร/นำเข้า?",
    "options": [
      {
        "key": "ก",
        "text": "สี่เหลี่ยมด้านขนาน (Parallelogram)"
      },
      {
        "key": "ข",
        "text": "สี่เหลี่ยมผืนผ้าตัดมุม (Manual Input)"
      },
      {
        "key": "ค",
        "text": "วงกลม (Circle)"
      },
      {
        "key": "ง",
        "text": "ทรงกระบอก (Cylinder)"
      }
    ],
    "answer": "ก",
    "explanation": "สี่เหลี่ยมด้านขนาน (Parallelogram) ใช้แทน General Input/Output"
  },
  {
    "id": 35,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "จาก Pseudocode ด้านล่าง ผลลัพธ์ของ count เท่ากับเท่าใด? SET count = 0 FOR i = 1 TO 3 FOR j = 1 TO i count = count + 1 END FOR END FOR",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "6"
      },
      {
        "key": "ค",
        "text": "9"
      },
      {
        "key": "ง",
        "text": "12"
      }
    ],
    "answer": "ข",
    "explanation": "i=1 (j=1) -> 1; i=2 (j=1,2) -> 2; i=3 (j=1,2,3) -> 3 รวม 1+2+3 = 6"
  },
  {
    "id": 36,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดเขียน Pseudocode สำหรับตรวจสอบว่าตัวแปร NUM เป็นเลขคู่หรือไม่ ได้ถูกต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "IF NUM / 2 == 0 THEN PRINT \"Even\""
      },
      {
        "key": "ข",
        "text": "IF NUM MOD 2 == 0 THEN PRINT \"Even\""
      },
      {
        "key": "ค",
        "text": "IF NUM % 2 == 1 THEN PRINT \"Even\""
      },
      {
        "key": "ง",
        "text": "IF NUM DIV 2 == 0 THEN PRINT \"Even\""
      }
    ],
    "answer": "ข",
    "explanation": "การหาเลขคู่ใช้ตัวดำเนินการ Modulus (NUM MOD 2 == 0) หรือเศษเหลือจากการหารสองเท่ากับ 0"
  },
  {
    "id": 37,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ \"แคปซูล\" หรือ \"สี่เหลี่ยมมุมมน\" (Terminal) ใน Flowchart ใช้สำหรับอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "แสดงจุดเริ่มต้น (Start) หรือ จุดสิ้นสุด (End) ของผังงาน"
      },
      {
        "key": "ข",
        "text": "แสดงการตัดสินใจ"
      },
      {
        "key": "ค",
        "text": "แสดงการประมวลผลคำนวณ"
      },
      {
        "key": "ง",
        "text": "แสดงการพิมพ์รายงานออกทางเครื่องพิมพ์"
      }
    ],
    "answer": "ก",
    "explanation": "Terminal Symbol ใช้แสดงจุดเริ่มต้น (Start) และจุดสิ้นสุด (End)"
  },
  {
    "id": 38,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "เมื่อแปลง Dry-run Trace Table ของอัลกอริทึม การบันทึก State ของตัวแปรมีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "เพื่อเพิ่มความเร็วในการประมวลผลของ Compiler"
      },
      {
        "key": "ข",
        "text": "เพื่อติดตามการเปลี่ยนแปลงค่าของตัวแปรในแต่ละรอบการประมวลผลเพื่อตรวจสอบตรรกะ"
      },
      {
        "key": "ค",
        "text": "เพื่อคำนวณขนาดการใช้พื้นที่ใน RAM"
      },
      {
        "key": "ง",
        "text": "เพื่อใช้สร้างไฟล์ Executable"
      }
    ],
    "answer": "ข",
    "explanation": "Trace table ช่วยไล่ตรวจติดตามการเปลี่ยนแปลงของตัวแปรเพื่อตรวจหา Logic Error"
  },
  {
    "id": 39,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "Pseudocode ข้อใดแสดงการทำงานแบบ \"Swapping\" ค่าสองตัวแปรโดยไม่ใช้ตัวแปรชั่วคราว (Temporary Variable)?",
    "options": [
      {
        "key": "ก",
        "text": "A = B; B = A;"
      },
      {
        "key": "ข",
        "text": "A = A + B; B = A - B; A = A - B;"
      },
      {
        "key": "ค",
        "text": "TEMP = A; A = B; B = TEMP;"
      },
      {
        "key": "ง",
        "text": "A = B + 1; B = A - 1;"
      }
    ],
    "answer": "ข",
    "explanation": "การสลับค่าโดยไม่ใช้ตัวแปรชั่วคราวอาศัยการบวกลบ (หรือ Bitwise XOR)"
  },
  {
    "id": 40,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "คุณลักษณะที่ดีของ อัลกอริทึม (Algorithm) ข้อใดสำคัญที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "ต้องเขียนด้วยภาษาระดับสูงเท่านั้น"
      },
      {
        "key": "ข",
        "text": "ต้องมีจุดสิ้นสุดที่แน่นอน (Finiteness) และมีผลลัพธ์ที่ถูกต้องชัดเจน (Definiteness)"
      },
      {
        "key": "ค",
        "text": "ต้องใช้ตัวแปรให้น้อยที่สุดเสมอ"
      },
      {
        "key": "ง",
        "text": "ต้องเขียนให้อยู่ในรูปของสัญลักษณ์ Flowchart เท่านั้น Session 3: Data Types, Operators & Expressions (ข้อ 41 - 60)"
      }
    ],
    "answer": "ข",
    "explanation": "อัลกอริทึมที่ดีต้องมีจุดสิ้นสุดชัดเจน (Finiteness) และผลลัพธ์ถูกต้องแน่นอน (Definiteness)"
  },
  {
    "id": 41,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "กำหนดให้ a = 5, b = 2 ในภาษา C/C++ นิพจน์ (float)a / b มีค่าเท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "2.0"
      },
      {
        "key": "ข",
        "text": "2.5"
      },
      {
        "key": "ค",
        "text": "2"
      },
      {
        "key": "ง",
        "text": "2.5000 (เป็นข้อมูลประเภท Integer)"
      }
    ],
    "answer": "ข",
    "explanation": "(float)a แปลง a เป็น 5.0 จากนั้นหารด้วย 2 (Implicit Conversion) ได้ 2.5"
  },
  {
    "id": 42,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "นิพจน์ทางตรรกศาสตร์ !(A && B) || C จะมีค่าเป็น FALSE ในกรณีใด?",
    "options": [
      {
        "key": "ก",
        "text": "A = True, B = True, C = False"
      },
      {
        "key": "ข",
        "text": "A = True, B = False, C = False"
      },
      {
        "key": "ค",
        "text": "A = False, B = False, C = True"
      },
      {
        "key": "ง",
        "text": "A = True, B = True, C = True"
      }
    ],
    "answer": "ก",
    "explanation": "!(T && T)"
  },
  {
    "id": 43,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "พิจารณาลำดับความสำคัญของตัวดำเนินการ (Operator Precedence) นิพจน์ 10 + 4 * 3 / 2 - 1 ได้ผลลัพธ์เท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "20"
      },
      {
        "key": "ข",
        "text": "15"
      },
      {
        "key": "ค",
        "text": "16"
      },
      {
        "key": "ง",
        "text": "12"
      }
    ],
    "answer": "ข",
    "explanation": "คูณหารทำก่อนจากซ้ายไปขวา: 4 x 3 = 12 -> 12 / 2 = 6; แล้วบวกลบ: 10 + 6 - 1 = 15"
  },
  {
    "id": 44,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "การทำงานของ Bitwise Operator 5 & 3 (5 AND 3) ให้ผลลัพธ์ในระบบฐานสิบเท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "1"
      },
      {
        "key": "ข",
        "text": "7"
      },
      {
        "key": "ค",
        "text": "0"
      },
      {
        "key": "ง",
        "text": "2"
      }
    ],
    "answer": "ก",
    "explanation": "5 = 101_2, 3 = 011_2; 101_2 & 011_2 = 001_2 = 1"
  },
  {
    "id": 45,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "หากทำการ Shift Bit ทางซ้าย: x << 2 โดยกำหนดให้ x = 3 (ในระบบฐานสิบ) ผลลัพธ์จะเป็นเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "6"
      },
      {
        "key": "ข",
        "text": "12"
      },
      {
        "key": "ค",
        "text": "1.5"
      },
      {
        "key": "ง",
        "text": "8"
      }
    ],
    "answer": "ข",
    "explanation": "Bitwise Left Shift: x << n = x * 2^n => 3 * 2^2 = 12"
  },
  {
    "id": 46,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดบรรยายลักษณะของ \"Short-circuit Evaluation\" ในตัวดำเนินการตรรกศาสตร์ && (AND) ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "ประเมินนิพจน์ทางขวาก่อนเสมอ"
      },
      {
        "key": "ข",
        "text": "ถ้านิพจน์ทางซ้ายเป็น False จะไม่ประเมินนิพจน์ทางขวาต่อทันที"
      },
      {
        "key": "ค",
        "text": "ถ้านิพจน์ทางซ้ายเป็น True จะหยุดประเมินทันที"
      },
      {
        "key": "ง",
        "text": "ทำการประเมินทั้งสองฝั่งเสมอเพื่อความถูกต้อง"
      }
    ],
    "answer": "ข",
    "explanation": "สำหรับ && ถ้าตัวหน้าเป็น False ผลลัพธ์รวมย่อมเป็น False แน่นอน จึงไม่ประเมินตัวหลังต่อ"
  },
  {
    "id": 47,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ขนาดของชนิดข้อมูล (Data Type Size) ขึ้นอยู่กับสิ่งใดมากที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "ขนาดของไฟล์ซอร์สโค้ด"
      },
      {
        "key": "ข",
        "text": "สถาปัตยกรรมของระบบคอมพิวเตอร์และ Compiler (เช่น 32-bit vs 64-bit)"
      },
      {
        "key": "ค",
        "text": "จำนวนตัวแปรที่ประกาศในโปรแกรม"
      },
      {
        "key": "ง",
        "text": "ความเร็วของ CPU"
      }
    ],
    "answer": "ข",
    "explanation": "ขนาด Data type ขึ้นอยู่กับ architecture (เช่น 32/64 bit) และตัว Compiler"
  },
  {
    "id": 48,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "จงหาค่าของ x หลังจากการประมวลผลคำสั่งต่อไปนี้: int x = 5; int y = x++;",
    "options": [
      {
        "key": "ก",
        "text": "x = 5, y = 5"
      },
      {
        "key": "ข",
        "text": "x = 6, y = 5"
      },
      {
        "key": "ค",
        "text": "x = 6, y = 6"
      },
      {
        "key": "ง",
        "text": "x = 5, y = 6"
      }
    ],
    "answer": "ข",
    "explanation": "y = x++ (Post-increment) ให้ y รับค่าเดิม (5) ไปก่อน แล้ว x ค่อยบวกเพิ่มเป็น 6"
  },
  {
    "id": 49,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดต่อไปนี้ตั้งชื่อตัวแปร (Identifier) ถูกต้องตามหลักสากล?",
    "options": [
      {
        "key": "ก",
        "text": "2nd_number"
      },
      {
        "key": "ข",
        "text": "float"
      },
      {
        "key": "ค",
        "text": "_user_total_score"
      },
      {
        "key": "ง",
        "text": "user-name"
      }
    ],
    "answer": "ค",
    "explanation": "ชื่อตัวแปรสามารถขึ้นต้นด้วย _ ได้ ตัวเลือกอื่นผิดกฎ (ขึ้นต้นด้วยตัวเลข, เป็นคำห้าม, มีเครื่องหมายลบ)"
  },
  {
    "id": 50,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ผลลัพธ์ของการคำนวณ 13 % 5 (Modulus) เท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "2.6"
      },
      {
        "key": "ข",
        "text": "2"
      },
      {
        "key": "ค",
        "text": "3"
      },
      {
        "key": "ง",
        "text": "0"
      }
    ],
    "answer": "ค",
    "explanation": "13 หารด้วย 5 ได้ 2 เศษ 3 ผลลัพธ์การ Modulus คือ 3"
  },
  {
    "id": 51,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "Implicit Type Conversion (Coercion) เกิดขึ้นเมื่อใด?",
    "options": [
      {
        "key": "ก",
        "text": "เมื่อโปรแกรมเมอร์เขียน cast explicit เช่น (int)3.14"
      },
      {
        "key": "ข",
        "text": "เมื่อตัวดำเนินการกระทำกับ operand ต่าง data type กัน แล้วภาษาแปลงชนิดข้อมูลให้โดยอัตโนมัติ"
      },
      {
        "key": "ค",
        "text": "เมื่อโปรแกรมเกิด Runtime Error"
      },
      {
        "key": "ง",
        "text": "เมื่อแปลงค่าตัวแปรผ่านการรับค่าทาง Keyboard"
      }
    ],
    "answer": "ข",
    "explanation": "Implicit type conversion เกิดขึ้นโดยอัตโนมัติเมื่อประมวลผล operand ต่างชนิดกัน"
  },
  {
    "id": 52,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ในระบบรหัส ASCII ตัวอักษร 'A' มีค่าเท่ากับ 65 (ฐานสิบ) นิพจน์ 'C' - 'A' จะมีค่าเท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "67"
      },
      {
        "key": "ข",
        "text": "2"
      },
      {
        "key": "ค",
        "text": "'B'"
      },
      {
        "key": "ง",
        "text": "-2"
      }
    ],
    "answer": "ข",
    "explanation": "'C' มีรหัส 67, 'A' มีรหัส 65 -> 67 - 65 = 2"
  },
  {
    "id": 53,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ชนิดข้อมูลประเภท unsigned int ต่างจาก signed int อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "unsigned int ใช้พื้นที่ Memory มากกว่า 2 เท่า"
      },
      {
        "key": "ข",
        "text": "unsigned int ไม่สามารถเก็บค่าติดลบได้ ทำให้ช่วงค่าบวกกว้างขึ้นเป็น 2 เท่า"
      },
      {
        "key": "ค",
        "text": "unsigned int สามารถเก็บทศนิยมได้"
      },
      {
        "key": "ง",
        "text": "unsigned int ทำงานช้ากว่า signed int"
      }
    ],
    "answer": "ข",
    "explanation": "unsigned ตัดช่วงติดลบออก แล้วนำพื้นที่ Bit ไปขยายช่วงค่าบวกได้เป็น 2 เท่า"
  },
  {
    "id": 54,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "นิพจน์แบบ Ternary Operator ในข้อใดทำงานเทียบเท่ากับโครงสร้าง if (a > b) max = a; else max = b;?",
    "options": [
      {
        "key": "ก",
        "text": "max = (a > b) : a ? b;"
      },
      {
        "key": "ข",
        "text": "max = (a > b) ? a : b;"
      },
      {
        "key": "ค",
        "text": "max = if(a > b) ? a : b;"
      },
      {
        "key": "ง",
        "text": "(a > b) ? max = a : max = b;"
      }
    ],
    "answer": "ข",
    "explanation": "Ternary Syntax: condition ? expr_if_true : expr_if_false;"
  },
  {
    "id": 55,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดเกิดปัญหา Overflow ชัดเจนที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "กำหนดค่า 300 ให้กับตัวแปรประเภท 8-bit signed integer (ซึ่งเก็บได้ระหว่าง -128 ถึง 127)"
      },
      {
        "key": "ข",
        "text": "หารตัวเลขด้วย 0"
      },
      {
        "key": "ค",
        "text": "แปลง Float เป็น Double"
      },
      {
        "key": "ง",
        "text": "นำ String ความยาว 5 ตัวอักษรไปต่อกับ String อื่น"
      }
    ],
    "answer": "ก",
    "explanation": "signed 8-bit int เก็บได้สูงสุด 127 การใส่ค่า 300 จะเกิด Integer Overflow"
  },
  {
    "id": 56,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "นิพจน์ 5 + 2 * 3 ^ 2 (ให้ ^ แทนการยกกำลัง) ตามหลักคณิตศาสตร์มาตรฐานมีค่าเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "63"
      },
      {
        "key": "ข",
        "text": "23"
      },
      {
        "key": "ค",
        "text": "441"
      },
      {
        "key": "ง",
        "text": "147"
      }
    ],
    "answer": "ข",
    "explanation": "ยกกำลังก่อน: 3^2=9 -> คูณ: 2 x 9 = 18 -> บวก: 5 + 18 = 23"
  },
  {
    "id": 57,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ค่าความจริง (Boolean) ในภาษา C มาตรฐาน (C99 ลงไป) Represent ค่า True/False อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "True = \"TRUE\", False = \"FALSE\""
      },
      {
        "key": "ข",
        "text": "True = 1 เท่านั้น, False = -1 เท่านั้น"
      },
      {
        "key": "ค",
        "text": "True = ค่าใดๆ ที่ไม่ใช่ 0, False = 0"
      },
      {
        "key": "ง",
        "text": "True = 0, False = 1"
      }
    ],
    "answer": "ค",
    "explanation": "ภาษา C มองค่า 0 เป็น False และค่าที่ไม่ใช่ 0 (Non-zero) ทั้งหมดเป็น True"
  },
  {
    "id": 58,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "การคำนวณแบบ Floating-point precision issue เช่น 0.1 + 0.2 != 0.3 เกิดจากสาเหตุใด?",
    "options": [
      {
        "key": "ก",
        "text": "ข้อผิดพลาดของ Compiler"
      },
      {
        "key": "ข",
        "text": "การแปลงตัวเลขฐานสิบที่มีทศนิยมเป็นระบบฐานสองแบบคงที่เกิดการปัดเศษ (IEEE 754 Representation)"
      },
      {
        "key": "ค",
        "text": "RAM ประมวลผลช้าเกินไป"
      },
      {
        "key": "ง",
        "text": "การใช้ชนิดข้อมูลแบบ Double แทน Float"
      }
    ],
    "answer": "ข",
    "explanation": "Floating-point precision issue ตามมาตรฐาน IEEE 754 ไม่สามารถแปลงเลขทศนิยมฐานสิบเป็นฐานสองได้ลงตัวเป๊ะๆ"
  },
  {
    "id": 59,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "จงหาค่าของ result จากนิพจน์: int result = (5 == 5) && (3 > 8) || (2 <= 2);",
    "options": [
      {
        "key": "ก",
        "text": "0 (False)"
      },
      {
        "key": "ข",
        "text": "1 (True)"
      },
      {
        "key": "ค",
        "text": "Syntax Error"
      },
      {
        "key": "ง",
        "text": "Null"
      }
    ],
    "answer": "ข",
    "explanation": "(T) && (F)"
  },
  {
    "id": 60,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ตัวดำเนินการ Compound Assignment ข้อใดมีความหมายเทียบเท่ากับ x = x * (y + 3)?",
    "options": [
      {
        "key": "ก",
        "text": "x *= y + 3;"
      },
      {
        "key": "ข",
        "text": "x =* y + 3;"
      },
      {
        "key": "ค",
        "text": "x *+= y + 3;"
      },
      {
        "key": "ง",
        "text": "x = x * y + 3; Session 4: Control Structures (Selection & Iteration) (ข้อ 61 - 80)"
      }
    ],
    "answer": "ก",
    "explanation": "x *= y + 3 เทียบเท่ากับ x = x * (y + 3) ตามหลักการจัดกลุ่ม Compound Assignment"
  },
  {
    "id": 61,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "โค้ดภาษา C ต่อไปนี้จะพิมพ์คำว่าอะไรออกทางหน้าจอ? int x = 2; switch(x) { case 1: printf(\"One \"); case 2: printf(\"Two \"); case 3: printf(\"Three \"); default: printf(\"Default\"); }",
    "options": [
      {
        "key": "ก",
        "text": "Two"
      },
      {
        "key": "ข",
        "text": "Two Three"
      },
      {
        "key": "ค",
        "text": "Two Three Default"
      },
      {
        "key": "ง",
        "text": "Default"
      }
    ],
    "answer": "ค",
    "explanation": "เนื่องจากไม่มีคำสั่ง break; หลัง case 2 โปรแกรมจะทำงานทะลุผ่าน (Fall-through) ไปยัง case 3 และ default"
  },
  {
    "id": 62,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "เหตุใดคำสั่ง switch-case จึงไม่เหมาะสำหรับการตรวจสอบเงื่อนไขประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "การเปรียบเทียบค่าความเท่ากันของ Integer"
      },
      {
        "key": "ข",
        "text": "การตรวจสอบเงื่อนไขที่เป็นช่วงข้อมูล (Range check) เช่น x >= 80 && x <= 100"
      },
      {
        "key": "ค",
        "text": "การตรวจสอบตัวอักษร (Char)"
      },
      {
        "key": "ง",
        "text": "การใช้นิพจน์ Enum"
      }
    ],
    "answer": "ข",
    "explanation": "switch-case เหมาะกับการเช็คค่าคงที่เฉพาะเจาะจง ไม่เหมาะกับการเช็คช่วงเงื่อนไข (Range)"
  },
  {
    "id": 63,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ลูปชนิดใดประกันว่าบล็อกคำสั่งภายในจะถูกรันอย่างน้อย 1 ครั้งแน่นอนเสมอ?",
    "options": [
      {
        "key": "ก",
        "text": "for loop"
      },
      {
        "key": "ข",
        "text": "while loop"
      },
      {
        "key": "ค",
        "text": "do-while loop"
      },
      {
        "key": "ง",
        "text": "foreach loop"
      }
    ],
    "answer": "ค",
    "explanation": "do-while เช็คเงื่อนไขทีหลัง จึงการันตีการทำงานอย่างน้อย 1 รอบเสมอ"
  },
  {
    "id": 64,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "คำสั่ง break และ continue มีความแตกต่างกันอย่างไรในการควบคุม ลูป?",
    "options": [
      {
        "key": "ก",
        "text": "break ข้ามไปรอบถัดไป, continue ออกจากลูปทันที"
      },
      {
        "key": "ข",
        "text": "break ออกจากลูปทันที, continue ข้ามคำสั่งที่เหลือในรอบปัจจุบันแล้วไปเริ่มรอบถัดไป"
      },
      {
        "key": "ค",
        "text": "break หยุดการทำงานของโปรแกรมทั้งหมด, continue เริ่มต้นลูปใหม่ตั้งแต่รอบแรก"
      },
      {
        "key": "ง",
        "text": "ไม่มีความแตกต่างกัน"
      }
    ],
    "answer": "ข",
    "explanation": "break หลุดออกจากลูปทันที; continue ข้ามไปรอบถัดไปทันที"
  },
  {
    "id": 65,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "พิจารณาโค้ดต่อไปนี้ ข้อใดเป็นผลลัพธ์ของ sum? int sum = 0; for (int i = 0; i < 5; i++) { if (i % 2 == 0) continue; sum += i; }",
    "options": [
      {
        "key": "ก",
        "text": "4"
      },
      {
        "key": "ข",
        "text": "6"
      },
      {
        "key": "ค",
        "text": "10"
      },
      {
        "key": "ง",
        "text": "0"
      }
    ],
    "answer": "ก",
    "explanation": "รอบ i=1 (1%2 != 0 => sum+=1), รอบ i=3 (3%2 != 0 => sum+=3) ผลรวมคือ 1+3 = 4"
  },
  {
    "id": 66,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "การเขียนเงื่อนไข if (x = 5) แทนที่จะเป็น if (x == 5) จะส่งผลอย่างไรในภาษา C?",
    "options": [
      {
        "key": "ก",
        "text": "เกิด Syntax Error Compile ไม่ผ่าน"
      },
      {
        "key": "ข",
        "text": "กำหนดค่า 5 ให้ x และเงื่อนไขประเมินเป็น True เสมอ"
      },
      {
        "key": "ค",
        "text": "เกิด Runtime Crash"
      },
      {
        "key": "ง",
        "text": "โปรแกรมจะละเว้นบล็อก if ไปทำ else"
      }
    ],
    "answer": "ข",
    "explanation": "x = 5 คือ Assignment ได้ผลลัพธ์เป็น 5 (ซึ่งไม่ใช่ 0) ทำให้ประเมินเป็น True เสมอ"
  },
  {
    "id": 67,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือจำนวนรอบการทำงานของลูป for (int i = 10; i > 0; i /= 2)?",
    "options": [
      {
        "key": "ก",
        "text": "10 รอบ"
      },
      {
        "key": "ข",
        "text": "5 รอบ"
      },
      {
        "key": "ค",
        "text": "4 รอบ"
      },
      {
        "key": "ง",
        "text": "Infinite loop"
      }
    ],
    "answer": "ค",
    "explanation": "i = 10, 5, 2, 1 เมื่อ i = 0 เงื่อนไข 0 > 0 เป็นเท็จ หยุดทำงาน รวมเป็น 4 รอบ"
  },
  {
    "id": 68,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "พิจารณา Nested Loop ต่อไปนี้ คำว่า \"Hello\" จะถูกพิมพ์กี่ครั้ง? for(int i=0; i<3; i++) { for(int j=0; j<4; j++) { printf(\"Hello \"); } }",
    "options": [
      {
        "key": "ก",
        "text": "7 ครั้ง"
      },
      {
        "key": "ข",
        "text": "12 ครั้ง"
      },
      {
        "key": "ค",
        "text": "3 ครั้ง"
      },
      {
        "key": "ง",
        "text": "4 ครั้ง"
      }
    ],
    "answer": "ข",
    "explanation": "ลูปนอก 3 รอบ ลูปใน 4 รอบ ทำงานทั้งหมด 3 x 4 = 12 ครั้ง"
  },
  {
    "id": 69,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดอธิบายโครงสร้างการทำงานของ Dangling Else Problem ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "คำสั่ง else ที่ไม่มีการใส่เครื่องหมายปาท่องโก๋ {} จะถูกผูกกับ if ตัวที่ใกล้ที่สุดก่อนเสมอ"
      },
      {
        "key": "ข",
        "text": "คำสั่ง else ทำงานโดยไม่สนใจเงื่อนไข if"
      },
      {
        "key": "ค",
        "text": "โปรแกรมค้างเนื่องจากวนลูปไม่สิ้นสุด"
      },
      {
        "key": "ง",
        "text": "else ทำงานพร้อมกับ if เสมอ"
      }
    ],
    "answer": "ก",
    "explanation": "Dangling Else: คำสั่ง else ที่ลอยอยู่จะจับคู่กับ if ตัวที่ใกล้ที่สุดเสมอหากไม่มีปาท่องโก๋ {}"
  },
  {
    "id": 70,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "โค้ดนี้จะให้ผลลัพธ์อย่างไร? int i = 0; while(i < 3); { printf(\"%d \", i); i++; }",
    "options": [
      {
        "key": "ก",
        "text": "0 1 2"
      },
      {
        "key": "ข",
        "text": "0 1 2 3"
      },
      {
        "key": "ค",
        "text": "ติด Infinite Loop (ไม่พิมพ์อะไรเลยออกหน้าจอ)"
      },
      {
        "key": "ง",
        "text": "Compile Error"
      }
    ],
    "answer": "ค",
    "explanation": "เครื่องหมาย ; หลัง while(i < 3); ทำให้เกิดลูปว่างเปล่าที่ติด Infinite Loop อยู่บรรทัดนั้น"
  },
  {
    "id": 71,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "โครงสร้างทางเลือกแบบใดที่ใช้ในการเลือกทำ 1 จากหลายๆ ทางเลือกด้วยการประเมินหลายเงื่อนไขตามลำดับ?",
    "options": [
      {
        "key": "ก",
        "text": "Simple If"
      },
      {
        "key": "ข",
        "text": "If-Else"
      },
      {
        "key": "ค",
        "text": "Nested If"
      },
      {
        "key": "ง",
        "text": "If-Else If-Else Ladder"
      }
    ],
    "answer": "ง",
    "explanation": "If-Else If-Else Ladder เหมาะสำหรับการเช็คหลายเงื่อนไขเรียงตามลำดับ"
  },
  {
    "id": 72,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือผลลัพธ์ของโปรแกรมต่อไปนี้? int a = 5, b = 10; if (a > 0) if (b < 5) printf(\"A\"); else printf(\"B\");",
    "options": [
      {
        "key": "ก",
        "text": "A"
      },
      {
        "key": "ข",
        "text": "B"
      },
      {
        "key": "ค",
        "text": "ไม่พิมพ์อะไรเลย"
      },
      {
        "key": "ง",
        "text": "Compile Error"
      }
    ],
    "answer": "ค",
    "explanation": "a > 0 เป็นจริง เข้ามาเช็ค b < 5 (10 < 5) เป็นเท็จ คำสั่ง else ถูกจับคู่กับ if (b < 5) จึงไม่พิมพ์อะไรเลย"
  },
  {
    "id": 73,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "การใช้งาน Loop Invariant หมายถึงอะไรในการพิสูจน์ความถูกต้องของโปรแกรม?",
    "options": [
      {
        "key": "ก",
        "text": "เงื่อนไขที่กลายเป็น False เสมอเมื่อจบลูป"
      },
      {
        "key": "ข",
        "text": "คุณสมบัติ/เงื่อนไขที่เป็นจริงเสมอ ทั้งก่อนเข้าลูป, ระหว่างการวนลูปทุกรอบ และหลังออกจากลูป"
      },
      {
        "key": "ค",
        "text": "ตัวแปรที่ใช้นับจำนวนรอบของลูป"
      },
      {
        "key": "ง",
        "text": "คำสั่งสั่งหยุดลูปกลางคัน"
      }
    ],
    "answer": "ข",
    "explanation": "Loop Invariant คือเงื่อนไขทางตรรกศาสตร์ที่เป็นจริงเสมอในทุกสเตจของลูป"
  },
  {
    "id": 74,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ลูปประเภท for ( ; ; ) ในภาษา C/C++ มีพฤติกรรมอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "เกิด Syntax Error เนื่องจากไม่มี Parameter"
      },
      {
        "key": "ข",
        "text": "เป็น Infinite Loop (วนลูปไม่สิ้นสุด)"
      },
      {
        "key": "ค",
        "text": "ไม่ทำงานเลยสักรอบ"
      },
      {
        "key": "ง",
        "text": "ทำงานเพียง 1 รอบ"
      }
    ],
    "answer": "ข",
    "explanation": "for(;;) ละเว้นทุกลูปพารามิเตอร์ มีค่าเท่ากับ Infinite Loop"
  },
  {
    "id": 75,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "เงื่อนไขใน while (x != 0) สามารถเขียนอีกรูปแบบหนึ่งสั้นๆ ได้อย่างไรในภาษา C?",
    "options": [
      {
        "key": "ก",
        "text": "while (!x)"
      },
      {
        "key": "ข",
        "text": "while (x)"
      },
      {
        "key": "ค",
        "text": "while (x == 1)"
      },
      {
        "key": "ง",
        "text": "while (x++)"
      }
    ],
    "answer": "ข",
    "explanation": "ในภาษา C while(x) มีความหมายตรงกับ while(x != 0)"
  },
  {
    "id": 76,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดจัดเป็นข้อเสียของการใช้ Nested Loop ลึกเกินไป (เช่น 4-5 ชั้น)?",
    "options": [
      {
        "key": "ก",
        "text": "ทำให้ขนาดไฟล์ Executable ใหญ่ขึ้นแบบ Exponential"
      },
      {
        "key": "ข",
        "text": "ทำให้ความซับซ้อนเชิงเวลา (Time Complexity) สูงขึ้นอย่างมาก ส่งผลให้โปรแกรมทำงานช้าลง"
      },
      {
        "key": "ค",
        "text": "ทำให้เกิด Syntax Error บน Compiler ยุคใหม่"
      },
      {
        "key": "ง",
        "text": "ทำให้ตัวแปรถูกลบออกจาก Memory"
      }
    ],
    "answer": "ข",
    "explanation": "Nested loop ยิ่งลึกจะยิ่งเพิ่มความซับซ้อนเชิงเวลาแบบ Polynomial/Exponential (O(n^k))"
  },
  {
    "id": 77,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "พิจารณาโค้ดนี้ ผลลัพธ์สุดท้ายของ a คือเท่าใด? int a = 1; do { a += 2; } while(a < 5);",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "5"
      },
      {
        "key": "ค",
        "text": "7"
      },
      {
        "key": "ง",
        "text": "1"
      }
    ],
    "answer": "ข",
    "explanation": "รอบที่ 1: a = 1+2 = 3 (เงื่อนไข 3 < 5 True) -> รอบที่ 2: a = 3+2 = 5 (เงื่อนไข 5 < 5 False) ออกจากลูป a=5"
  },
  {
    "id": 78,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดระบุข้อผิดพลาดของโค้ดต่อไปนี้ได้ถูกต้อง? for (float f = 0.0; f != 1.0; f += 0.1) { printf(\"%f \", f); }",
    "options": [
      {
        "key": "ก",
        "text": "ตัวแปรลูปห้ามใช้ Float"
      },
      {
        "key": "ข",
        "text": "อาจติด Infinite Loop เนื่องจากปัญหาการปัดเศษ (Floating-point precision) ทำให้ f อาจไม่เท่ากับ 1.0 แบบเป๊ะๆ"
      },
      {
        "key": "ค",
        "text": "คำสั่ง printf ใช้ Format Specifier ผิด"
      },
      {
        "key": "ง",
        "text": "โค้ดทำงานถูกต้องเรียบร้อย พิมพ์ 0.0 ถึง 0.9"
      }
    ],
    "answer": "ข",
    "explanation": "ค่า f อาจเป็น 0.999999 ซึ่งไม่เท่ากับ 1.0 พอดี ทำให้เกิด Infinite Loop"
  },
  {
    "id": 79,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "การทำ \"Loop Unrolling\" เป็นเทคนิคเพื่ออะไรในการปรับแต่งโปรแกรม (Optimization)?",
    "options": [
      {
        "key": "ก",
        "text": "ลดจำนวนครั้งในการเช็คเงื่อนไขลูป เพื่อเพิ่มความเร็วในการประมวลผล"
      },
      {
        "key": "ข",
        "text": "ช่วยประหยัด RAM"
      },
      {
        "key": "ค",
        "text": "เปลี่ยนลูปเป็นโครงสร้าง Recursion"
      },
      {
        "key": "ง",
        "text": "ป้องกันการเกิด Stack Overflow"
      }
    ],
    "answer": "ก",
    "explanation": "Loop Unrolling ลด Overhead การเช็คเงื่อนไขหัวลูป ช่วยให้ CPU ประมวลผลเร็วขึ้น"
  },
  {
    "id": 80,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "คำสั่ง switch ในภาษา C มาตรฐาน ไม่สามารถ ใช้กับชนิดข้อมูลประเภทใดได้?",
    "options": [
      {
        "key": "ก",
        "text": "int"
      },
      {
        "key": "ข",
        "text": "char"
      },
      {
        "key": "ค",
        "text": "enum"
      },
      {
        "key": "ง",
        "text": "double Session 5: Functions, Scope & Memory Management (ข้อ 81 - 100)"
      }
    ],
    "answer": "ง",
    "explanation": "คำสั่ง switch รับได้เฉพาะชนิดข้อมูลแบบ Integral (int, char, enum) ไม่รองรับ Float/Double"
  },
  {
    "id": 81,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "การประกาศ Function Prototype ก่อนฟังก์ชัน main() มีวัตถุประสงค์หลักเพื่ออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "เพื่อจอง Memory ใน Heap"
      },
      {
        "key": "ข",
        "text": "เพื่อแจ้ง Compiler ให้ทราบถึงชื่อ, ชนิดข้อมูลคืนค่า (Return type) และ Parameter ของฟังก์ชันก่อนการเรียกใช้งานจริง"
      },
      {
        "key": "ค",
        "text": "เพื่อเพิ่มความเร็วในการ Run โปรแกรม"
      },
      {
        "key": "ง",
        "text": "เพื่อสร้างตัวแปรแบบ Global"
      }
    ],
    "answer": "ข",
    "explanation": "Function Prototype แจ้งข้อมูลป้ายชื่อและลายเซ็นของฟังก์ชันให้ Compiler ทราบล่วงหน้า"
  },
  {
    "id": 82,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่ง static เมื่อใช้ประกาศหน้าตัวแปรใน Local Scope ของฟังก์ชัน มีผลอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ทำให้ตัวแปรนั้นกลายเป็น Constant ห้ามแก้ไขค่า"
      },
      {
        "key": "ข",
        "text": "ทำให้ตัวแปรคงค่าเดิมไว้ไม่ถูกทำลายแม้ว่าจะจบการทำงานของฟังก์ชันไปแล้ว"
      },
      {
        "key": "ค",
        "text": "ทำให้ฟังก์ชันอื่นสามารถเรียกใช้ตัวแปรนี้ได้โดยตรง"
      },
      {
        "key": "ง",
        "text": "ส่งตัวแปรไปเก็บไว้ใน CPU Register"
      }
    ],
    "answer": "ข",
    "explanation": "static local variable จะถูกจัดเก็บใน Data Segment ทำให้ค่าคงอยู่ตลอดชีวิตโปรแกรม"
  },
  {
    "id": 83,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ผลลัพธ์ของการรันโปรแกรมนี้คืออะไร? #include <stdio.h> void update(int x) { x = x * 2; } int main() { int num = 10; update(num); printf(\"%d\", num); return 0; }",
    "options": [
      {
        "key": "ก",
        "text": "10"
      },
      {
        "key": "ข",
        "text": "20"
      },
      {
        "key": "ค",
        "text": "0"
      },
      {
        "key": "ง",
        "text": "Garbage Value"
      }
    ],
    "answer": "ก",
    "explanation": "ภาษา C ส่งค่าแบบ Pass-by-Value เป็นหลัก การแก้ไข x ในฟังก์ชันไม่กระทบค่า num ใน main()"
  },
  {
    "id": 84,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "แนวคิดเรื่อง Recursion ข้อใดที่เสี่ยงต่อการทำให้เกิด \"Stack Overflow\" มากที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "การเขียน Base Case ไว้บรรทัดแรก"
      },
      {
        "key": "ข",
        "text": "การไม่มี Base Case หรือเงื่อนไขเพื่อหยุดการเรียกตัวเอง"
      },
      {
        "key": "ค",
        "text": "การส่ง Parameter แบบ Pass-by-Reference"
      },
      {
        "key": "ง",
        "text": "การคืนค่าข้อมูลประเภท Integer"
      }
    ],
    "answer": "ข",
    "explanation": "Recursion ที่ไม่มี Base Case จะเรียกตัวเองไปเรื่อยๆ จน Stack Frame เต็ม RAM เกิด Stack Overflow"
  },
  {
    "id": 85,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "การคืนค่าตำแหน่ง Pointer ของ Local Variable ออกจากฟังก์ชัน ถือเป็นความเสี่ยงอย่างไร (Dangling Pointer)?",
    "options": [
      {
        "key": "ก",
        "text": "เกิด Syntax Error ทันที"
      },
      {
        "key": "ข",
        "text": "เมื่อฟังก์ชันจบ Stack Frame ของ Local Variable นั้นจะถูกพังไป ทำให้ Pointer ชี้ไปยัง Memory ที่ไม่ปลอดภัย"
      },
      {
        "key": "ค",
        "text": "ทำให้ RAM เต็มทันที"
      },
      {
        "key": "ง",
        "text": "ไม่มีผลเสียใดๆ โปรแกรมทำงานได้ปกติ"
      }
    ],
    "answer": "ข",
    "explanation": "การคืนค่า Pointer ของ Local Variable นำไปสู่ Dangling Pointer เพราะ Memory นั้นถูก Deallocate ไปแล้ว"
  },
  {
    "id": 86,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ฟังก์ชันประเภท Inline Function ช่วยลด Overhead ของอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Overhead ในการจองพื้นที่ Disk Space"
      },
      {
        "key": "ข",
        "text": "Overhead ในการจัดเก็บไฟล์ Source Code"
      },
      {
        "key": "ค",
        "text": "Function Call Overhead (การ Push/Pop Stack Frame และการ Jump สลับการทำงาน)"
      },
      {
        "key": "ง",
        "text": "Overhead ของการ Compile โค้ด"
      }
    ],
    "answer": "ค",
    "explanation": "Inline Function จะคัดลอกโค้ดไปวางตรงจุดเรียก ช่วยลด overhead การสร้าง Stack Frame"
  },
  {
    "id": 87,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "โครงสร้าง Stack Frame ของฟังก์ชันจัดเก็บสิ่งใดบ้าง?",
    "options": [
      {
        "key": "ก",
        "text": "Return Address, Local Variables, Function Parameters"
      },
      {
        "key": "ข",
        "text": "Dynamic Arrays, Global Variables"
      },
      {
        "key": "ค",
        "text": "Source Code, Binary Output"
      },
      {
        "key": "ง",
        "text": "File Descriptors, Heap Pointers"
      }
    ],
    "answer": "ก",
    "explanation": "Stack Frame เก็บ Return Address, Parameters, และ Local Variables ของฟังก์ชันนั้นๆ"
  },
  {
    "id": 88,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดคือลักษณะของ \"Pure Function\" ในหลักการออกแบบโปรแกรมที่ดี?",
    "options": [
      {
        "key": "ก",
        "text": "อ่านค่าและแก้ไข Global Variable เสมอ"
      },
      {
        "key": "ข",
        "text": "ให้ผลลัพธ์เหมือนเดิมเสมอเมื่อส่ง Argument ค่าเดิมเข้าไป และไม่มี Side Effects (ไม่แก้ไขภายนอก)"
      },
      {
        "key": "ค",
        "text": "ฟังก์ชันที่ไม่รับ Parameter และไม่ Return ค่า"
      },
      {
        "key": "ง",
        "text": "ฟังก์ชันที่ทำงานร่วมกับระบบ Hardware โดยตรง"
      }
    ],
    "answer": "ข",
    "explanation": "Pure Function: ให้ Output เดิมเสมอสำหรับ Input เดิม และไม่มี Side Effects"
  },
  {
    "id": 89,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "พิจารณาโค้ดต่อไปนี้ x จะมีค่าเท่าใดใน main()? int x = 5; // Global int main() { int x = 10; // Local printf(\"%d\", x); return 0; }",
    "options": [
      {
        "key": "ก",
        "text": "5"
      },
      {
        "key": "ข",
        "text": "10"
      },
      {
        "key": "ค",
        "text": "เกิดข้อผิดพลาด Variable Redeclaration Error"
      },
      {
        "key": "ง",
        "text": "15"
      }
    ],
    "answer": "ข",
    "explanation": "Local variable จะทำหน้าที่ \"Shadow\" (บดบัง) Global variable ที่มีชื่อซ้ำกันใน Scope นั้น"
  },
  {
    "id": 90,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดอธิบายพฤติกรรมของการส่งค่าแบบ Pass-by-Reference ได้ถูกต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "ฟังก์ชันทำงานกับ Copy ของข้อมูลดั้งเดิม"
      },
      {
        "key": "ข",
        "text": "ฟังก์ชันเข้าถึงและแก้ไขข้อมูลดั้งเดิมผ่านทาง Memory Address โดยตรง"
      },
      {
        "key": "ค",
        "text": "ใช้หน่วยความจำใน Stack เพิ่มขึ้นตามขนาดของโครงสร้างข้อมูล"
      },
      {
        "key": "ง",
        "text": "ไม่สามารถใช้กับโครงสร้างข้อมูลขนาดใหญ่ได้"
      }
    ],
    "answer": "ข",
    "explanation": "Pass-by-Reference ส่ง Memory Address ไป ทำให้ฟังก์ชันแก้ไขตัวแปรต้นทางได้โดยตรง"
  },
  {
    "id": 91,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "หากต้องการส่ง Array ขนาด 100 Element เข้าไปในฟังก์ชัน ข้อใดเป็นวิธีที่มีประสิทธิภาพสูงสุดในเชิง Memory?",
    "options": [
      {
        "key": "ก",
        "text": "คัดลอก Array ทั้งหมดลงในตัวแปรใหม่"
      },
      {
        "key": "ข",
        "text": "ส่ง Pointer หรือ Address ของ Array ตัวแรกเข้าไป (Pass-by-Reference/Pointer)"
      },
      {
        "key": "ค",
        "text": "ประกาศ Array ใหม่ใน Heap แล้วคัดลอกทีละค่า"
      },
      {
        "key": "ง",
        "text": "แปลง Array ให้เป็น String ก่อนส่ง"
      }
    ],
    "answer": "ข",
    "explanation": "ส่งแบบ Pointer/Reference ประหยัดความจุและเวลาที่สุด เพราะไม่ต้องคัดลอกข้อมูลทั้ง 100 ชิ้น"
  },
  {
    "id": 92,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ฟังก์ชัน malloc() ในภาษา C ทำการจอง Memory ในส่วนใดของโครงสร้างหน่วยความจำ?",
    "options": [
      {
        "key": "ก",
        "text": "Stack"
      },
      {
        "key": "ข",
        "text": "Heap"
      },
      {
        "key": "ค",
        "text": "Code Segment (Text)"
      },
      {
        "key": "ง",
        "text": "Data Segment"
      }
    ],
    "answer": "ข",
    "explanation": "malloc() ทำหน้าที่จองหน่วยความจำในส่วน Heap แบบ Dynamic"
  },
  {
    "id": 93,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "เมื่อใช้ malloc() หรือ calloc() แล้ว ไม่ได้ทำการ free() Memory หลังจากเลิกใช้งาน จะเกิดปัญหาใด?",
    "options": [
      {
        "key": "ก",
        "text": "Buffer Overflow"
      },
      {
        "key": "ข",
        "text": "Memory Leak"
      },
      {
        "key": "ค",
        "text": "Segment Fault"
      },
      {
        "key": "ง",
        "text": "Deadlock"
      }
    ],
    "answer": "ข",
    "explanation": "การจอง Dynamic Memory แล้วไม่คืนคืนสู่ระบบ เรียกว่า Memory Leak"
  },
  {
    "id": 94,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดคือความแตกต่างระหว่าง calloc() และ malloc()?",
    "options": [
      {
        "key": "ก",
        "text": "calloc() ใช้จอง Stack แต่ malloc() ใช้จอง Heap"
      },
      {
        "key": "ข",
        "text": "calloc() จะเคลียร์ค่าใน Memory ให้เป็น 0 ทั้งหมดหลังจอง แต่ malloc() ไม่ทำการ เคลียร์ค่า (เป็น Garbage Value)"
      },
      {
        "key": "ค",
        "text": "malloc() สามารถขยายขนาด Memory ได้ แต่ calloc() ทำไม่ได้"
      },
      {
        "key": "ง",
        "text": "ทั้งคู่ไม่มีความแตกต่างกัน"
      }
    ],
    "answer": "ข",
    "explanation": "calloc() ต่างจาก malloc() ตรงที่มันจะทำการเคลียร์ Memory ทุก Byte ให้เป็นค่าศูนย์ (Zero-initialization)"
  },
  {
    "id": 95,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "พิจารณาฟังก์ชันก้าวหน้า (Tail Recursion) ข้อใดคือข้อดีหลักเมื่อเทียบกับ Recursion ทั่วไป?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้งาน Memory ใน Heap น้อยลง"
      },
      {
        "key": "ข",
        "text": "Compiler ยุคใหม่สามารถ Optimize ให้เปลี่ยนรูปแบบเป็น Iteration เพื่อป้องกัน Stack Overflow ได้ (Tail Call Optimization)"
      },
      {
        "key": "ค",
        "text": "สามารถรันได้โดยไม่ต้องมี Base Case"
      },
      {
        "key": "ง",
        "text": "คืนค่าผลลัพธ์ได้หลายค่าพร้อมกัน"
      }
    ],
    "answer": "ข",
    "explanation": "Tail Recursion เปิดโอกาสให้ Compiler ทำการ Optimize เป็นการวนลูป (Tail Call Optimization) ได้"
  },
  {
    "id": 96,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ตัวแปรชนิด extern ในภาษา C ใช้เพื่อวัตถุประสงค์ใด?",
    "options": [
      {
        "key": "ก",
        "text": "ประกาศตัวแปรที่เป็น Constant"
      },
      {
        "key": "ข",
        "text": "อ้างอิงถึงตัวแปร Global ที่ถูกประกาศไว้ในไฟล์ซอร์สโค้ดอื่น (Multi-file project)"
      },
      {
        "key": "ค",
        "text": "สร้างตัวแปรที่ใช้งานเฉพาะใน Thread ปัจจุบัน"
      },
      {
        "key": "ง",
        "text": "บังคับให้ตัวแปรเก็บใน CPU Register"
      }
    ],
    "answer": "ข",
    "explanation": "Keyword extern ประกาศอ้างอิงถึง Global variable ที่อยู่ในไฟล์อื่น"
  },
  {
    "id": 97,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่ง return; (ไม่มีการส่งค่ากลับ) เหมาะสำหรับฟังก์ชันที่มี Return Type แบบใด?",
    "options": [
      {
        "key": "ก",
        "text": "int"
      },
      {
        "key": "ข",
        "text": "float"
      },
      {
        "key": "ค",
        "text": "void"
      },
      {
        "key": "ง",
        "text": "char*"
      }
    ],
    "answer": "ค",
    "explanation": "return; ไม่มีนิพจน์ส่งคืน ใช้หยุดการทำงานในฟังก์ชันประเภท void"
  },
  {
    "id": 98,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดคือผลลัพธ์ของการรันโปรแกรมนี้? #include <stdio.h> int fun() { static int count = 0; count++; return count; } int main() { printf(\"%d \", fun()); printf(\"%d \", fun()); return 0; }",
    "options": [
      {
        "key": "ก",
        "text": "1 1"
      },
      {
        "key": "ข",
        "text": "1 2"
      },
      {
        "key": "ค",
        "text": "2 2"
      },
      {
        "key": "ง",
        "text": "0 1"
      }
    ],
    "answer": "ข",
    "explanation": "count เป็น static variable: เรียกครั้งแรกได้ 1, เรียกครั้งที่สองขยับเป็น 2"
  },
  {
    "id": 99,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "การใช้ Overloading Function (ในภาษาอย่าง C++ หรือ Java) หมายถึงอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "การเขียนฟังก์ชันใน Class ลูกเพื่อทับฟังก์ชันใน Class แม่"
      },
      {
        "key": "ข",
        "text": "การมีฟังก์ชันชื่อเดียวกันหลายฟังก์ชันใน Scope เดียวกัน โดยมี Parameter List ต่างกัน"
      },
      {
        "key": "ค",
        "text": "การเรียกใช้ฟังก์ชันซ้ำๆ จนเต็ม RAM"
      },
      {
        "key": "ง",
        "text": "การสร้างฟังก์ชันที่ไม่คืนค่าใดๆ"
      }
    ],
    "answer": "ข",
    "explanation": "Function Overloading คือการสร้างฟังก์ชันชื่อเดียวกัน แต่มี Parameter List ต่างกัน"
  },
  {
    "id": 100,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดเป็นแนวทางปฏิบัติที่ดี (Best Practice) เกี่ยวกับขอบเขตตัวแปร (Scope)?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้ Global Variable ให้ได้มากที่สุดเพื่อความสะดวกในการส่งค่า"
      },
      {
        "key": "ข",
        "text": "จำกัดขอบเขตตัวแปรให้แคบที่สุดเท่าที่เป็นไปได้ (Minimize Scope) เพื่อลด Side Effects"
      },
      {
        "key": "ค",
        "text": "ประกาศตัวแปรทุกตัวไว้ที่ต้นโปรแกรมเสมอ"
      },
      {
        "key": "ง",
        "text": "หลีกเลี่ยงการใช้ Local Variable Session 6: Data Structures & Basic Algorithms (ข้อ 101 - 120)"
      }
    ],
    "answer": "ข",
    "explanation": "หลักการแคบที่สุด (Principle of Least Privilege): ควรจำกัด Scope ของตัวแปรให้น้อยที่สุดเพื่อความปลอดภัย"
  },
  {
    "id": 101,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "การเข้าถึงข้อมูลตัวที่ i ใน Array ขนาด N มีความซับซ้อนทางเวลา (Time Complexity) เท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "O(1)"
      },
      {
        "key": "ข",
        "text": "O(n)"
      },
      {
        "key": "ค",
        "text": "O(log n)"
      },
      {
        "key": "ง",
        "text": "O(n^2)"
      }
    ],
    "answer": "ก",
    "explanation": "อาร์เรย์คำนวณตำแหน่งด้วย Offset: Address = Base + i * Size จึงเข้าถึงได้ด้วยความเร็ว constant time O(1)"
  },
  {
    "id": 102,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "โครงสร้างข้อมูล Array ต่างจาก Linked List ในเรื่อง Memory Allocation อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "Array จองพื้นที่ต่อเนื่องกันใน Memory (Contiguous) แต่ Linked List ไม่จำเป็นต้องต่อเนื่องกัน"
      },
      {
        "key": "ข",
        "text": "Linked List จองพื้นที่แบบ Static ส่วน Array จองแบบ Dynamic"
      },
      {
        "key": "ค",
        "text": "Array เก็บข้อมูลประเภทต่างกันได้ แต่ Linked List เก็บได้ชนิดเดียว"
      },
      {
        "key": "ง",
        "text": "ไม่มีความแตกต่างกันในเรื่อง Memory"
      }
    ],
    "answer": "ก",
    "explanation": "อาร์เรย์ใช้ Memory แบบต่อเนื่องกัน (Contiguous) ส่วน Linked List ใช้ Pointer เชื่อม Node ที่อยู่กระจัดกระจาย"
  },
  {
    "id": 103,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "กำหนดอาร์เรย์ int A[3][4]; ในภาษา C/C++ จำนวน Element ทั้งหมดและ indexing ตัวแรกคืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "12 elements, A[1][1]"
      },
      {
        "key": "ข",
        "text": "12 elements, A[0][0]"
      },
      {
        "key": "ค",
        "text": "7 elements, A[0][0]"
      },
      {
        "key": "ง",
        "text": "12 elements, A[3][4]"
      }
    ],
    "answer": "ข",
    "explanation": "3 x 4 = 12 elements และในภาษา C จะเริ่ม Index ด้วย [0][0]"
  },
  {
    "id": 104,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "อัลกอริทึมการจัดเรียงข้อมูลแบบใดที่มีประสิทธิภาพเฉลี่ยดีที่สุด (O(n log n))?",
    "options": [
      {
        "key": "ก",
        "text": "Bubble Sort"
      },
      {
        "key": "ข",
        "text": "Insertion Sort"
      },
      {
        "key": "ค",
        "text": "Selection Sort"
      },
      {
        "key": "ง",
        "text": "Quick Sort"
      }
    ],
    "answer": "ง",
    "explanation": "Quick Sort มีประสิทธิภาพเฉลี่ยเป็น O(n log n) ขณะที่ตัวเลือกอื่นเป็น O(n^2)"
  },
  {
    "id": 105,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "โครงสร้างข้อมูลแบบ Stack ทำงานตามหลักการใด?",
    "options": [
      {
        "key": "ก",
        "text": "FIFO (First In, First Out)"
      },
      {
        "key": "ข",
        "text": "LIFO (Last In, First Out)"
      },
      {
        "key": "ค",
        "text": "LILO (Last In, Last Out)"
      },
      {
        "key": "ง",
        "text": "Random Access"
      }
    ],
    "answer": "ข",
    "explanation": "Stack เป็นโครงสร้างแบบ เข้าทีหลัง-ออกก่อน (LIFO: Last In, First Out)"
  },
  {
    "id": 106,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "โครงสร้างข้อมูลแบบ Queue ทำงานตามหลักการใด?",
    "options": [
      {
        "key": "ก",
        "text": "FIFO (First In, First Out)"
      },
      {
        "key": "ข",
        "text": "LIFO (Last In, First Out)"
      },
      {
        "key": "ค",
        "text": "Priority-based เท่านั้น"
      },
      {
        "key": "ง",
        "text": "FILO (First In, Last Out)"
      }
    ],
    "answer": "ก",
    "explanation": "Queue เป็นโครงสร้างแบบ เข้าก่อน-ออกก่อน (FIFO: First In, First Out)"
  },
  {
    "id": 107,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "หากต้องการหาข้อมูลในอาร์เรย์ที่ ไม่ได้จัดเรียงลำดับ อัลกอริทึมใดที่สามารถใช้งานได้?",
    "options": [
      {
        "key": "ก",
        "text": "Binary Search"
      },
      {
        "key": "ข",
        "text": "Linear Search"
      },
      {
        "key": "ค",
        "text": "Interpolation Search"
      },
      {
        "key": "ง",
        "text": "Exponential Search"
      }
    ],
    "answer": "ข",
    "explanation": "Linear Search อ่านเช็คทีละตัวจากหน้าไปหลัง จึงใช้ได้กับอาร์เรย์ที่ยังไม่ได้เรียงลำดับ"
  },
  {
    "id": 108,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "พิจารณาโค้ดอาร์เรย์ภาษา C: int arr[] = {10, 20, 30, 40}; ค่าของ *(arr + 2) คือเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "10"
      },
      {
        "key": "ข",
        "text": "20"
      },
      {
        "key": "ค",
        "text": "30"
      },
      {
        "key": "ง",
        "text": "Address ของ arr"
      }
    ],
    "answer": "ค",
    "explanation": "Pointer Arithmetic: *(arr + 2) มีค่าเท่ากับ arr[2] ซึ่งคือ 30"
  },
  {
    "id": 109,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ข้อใดคือข้อเสียหลักของ Array เมื่อเปรียบเทียบกับ Linked List?",
    "options": [
      {
        "key": "ก",
        "text": "การเข้าถึงข้อมูลตามดัชนีทำได้ช้ากว่า"
      },
      {
        "key": "ข",
        "text": "ขนาดคงที่ (Fixed Size) ไม่สามารถขยายขนาดได้ทันทีขณะรัน และการแทรก/ลบข้อมูลตรงกลางทำได้ช้า"
      },
      {
        "key": "ค",
        "text": "เปลืองพื้นที่เก็บ Pointer"
      },
      {
        "key": "ง",
        "text": "ไม่รองรับข้อมูลประเภท Integer"
      }
    ],
    "answer": "ข",
    "explanation": "ข้อเสียหลักของ Array คือไม่สามารถขยายขนาดกะทันหันได้ และยุ่งยากเมื่อต้อง Insert/Delete ข้อมูลกลางแถว"
  },
  {
    "id": 110,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ข้อใดอธิบายสถานการณ์ \"Off-by-One Error\" ในการใช้อาร์เรย์ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "การลืมใส่ตัวแปรรับค่า"
      },
      {
        "key": "ข",
        "text": "การใช้อินเด็กซ์เกินขนาดอาร์เรย์ เช่น ประกาศขนาด 10 แต่อ่านอินเด็กซ์ที่ 10 (ซึ่งคือตัวที่ 11)"
      },
      {
        "key": "ค",
        "text": "การหารด้วยเลข 1"
      },
      {
        "key": "ง",
        "text": "การกำหนดค่าอาร์เรย์ผิดประเภท"
      }
    ],
    "answer": "ข",
    "explanation": "Off-by-One Error เกิดจากการนับ Index ผิดไป 1 ตำแหน่ง เช่น ลูปไปถึง Index เท่ากับขนาด Array"
  },
  {
    "id": 111,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ในการจัดเรียงข้อมูลแบบ Bubble Sort หากมีข้อมูล N ชุด ในกรณีแย่ที่สุด (Worst Case) ต้องทำการเปรียบเทียบข้อมูลประมาณกี่ครั้ง?",
    "options": [
      {
        "key": "ก",
        "text": "N ครั้ง"
      },
      {
        "key": "ข",
        "text": "N log N ครั้ง"
      },
      {
        "key": "ค",
        "text": "N(N-1)/2 ครั้ง"
      },
      {
        "key": "ง",
        "text": "2^N ครั้ง"
      }
    ],
    "answer": "ค",
    "explanation": "Bubble Sort Worst-case การเปรียบเทียบคือ N(N-1)/2 หรือ O(n^2)"
  },
  {
    "id": 112,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "Null Character ('\\0') มีบทบาทอย่างไรใน String ของภาษา C?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้แสดงจุดเริ่มต้นของ String"
      },
      {
        "key": "ข",
        "text": "ใช้เป็นตัวคั่นระว่างคำ"
      },
      {
        "key": "ค",
        "text": "ใช้เป็น Sentinel value ระบุจุดสิ้นสุดของ String ใน Character Array"
      },
      {
        "key": "ง",
        "text": "ไม่มีประโยชน์ เป็นเพียงตัวอักษรขยะ"
      }
    ],
    "answer": "ค",
    "explanation": "'\\0' เป็นสัญลักษณ์แสดงการสิ้นสุดของข้อความ (Null-terminator) ใน C-String"
  },
  {
    "id": 113,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "การประกาศ Structure (struct) ในภาษา C มีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "เพื่อรวมตัวแปรต่างชนิดข้อมูลกันให้อยู่ภายใต้ชื่อกลุ่มเดียวกัน"
      },
      {
        "key": "ข",
        "text": "เพื่อสร้างฟังก์ชันใหม่"
      },
      {
        "key": "ค",
        "text": "เพื่อเพิ่มความเร็วในการประมวลผลทางคณิตศาสตร์"
      },
      {
        "key": "ง",
        "text": "เพื่อใช้จอง Memory แบบ Dynamic"
      }
    ],
    "answer": "ก",
    "explanation": "struct เป็น Heterogeneous Data Structure รวมข้อมูลต่างประเภทเข้าด้วยกัน"
  },
  {
    "id": 114,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "การค้นหาแบบ Binary Search บนอาร์เรย์ขนาด 1,000 ชิ้น จะใช้จำนวนการเปรียบเทียบในกรณีแย่ที่สุด (Worst Case) ไม่เกินกี่ครั้ง?",
    "options": [
      {
        "key": "ก",
        "text": "10 ครั้ง"
      },
      {
        "key": "ข",
        "text": "500 ครั้ง"
      },
      {
        "key": "ค",
        "text": "1,000 ครั้ง"
      },
      {
        "key": "ง",
        "text": "100 ครั้ง"
      }
    ],
    "answer": "ก",
    "explanation": "log_2(1000) ≈ 9.96 ดังนั้น Binary Search จะเปรียบเทียบไม่เกิน 10 ครั้ง"
  },
  {
    "id": 115,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "พิจารณาการส่ง Array เข้าไปในฟังก์ชัน void process(int arr[]) เหตุใดการเปลี่ยนค่า arr[0] ภายในฟังก์ชันจึงส่งผลกระทบถึงอาร์เรย์ตัวจริงนอกฟังก์ชัน?",
    "options": [
      {
        "key": "ก",
        "text": "เพราะอาร์เรย์ถูกคัดลอกลง Global memory"
      },
      {
        "key": "ข",
        "text": "เพราะชื่อของ Array จะถูก Decay เป็น Pointer ชี้ไปยังตำแหน่งเริ่มต้นใน Memory (Pass-by-Pointer)"
      },
      {
        "key": "ค",
        "text": "เพราะฟังก์ชันทำการสั่ง Save ไฟล์โดยอัตโนมัติ"
      },
      {
        "key": "ง",
        "text": "เพราะเป็นคุณสมบัติเฉพาะของภาษา C++ เท่านั้น"
      }
    ],
    "answer": "ข",
    "explanation": "ชื่อของ Array จะถูกส่งไปแบบ Pointer (Array Decay) เสมอ ทำให้ฟังก์ชันอ้างอิงตำแหน่งจริงใน Memory"
  },
  {
    "id": 116,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ข้อใดต่อไปนี้จัดเป็นโครงสร้างข้อมูลแบบ Non-linear Data Structure?",
    "options": [
      {
        "key": "ก",
        "text": "Array"
      },
      {
        "key": "ข",
        "text": "Linked List"
      },
      {
        "key": "ค",
        "text": "Tree / Graph"
      },
      {
        "key": "ง",
        "text": "Queue"
      }
    ],
    "answer": "ค",
    "explanation": "Tree และ Graph เป็นโครงสร้างข้อมูลแบบไม่เป็นเส้นตรง (Non-linear)"
  },
  {
    "id": 117,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "การเรียงลำดับแบบ Selection Sort มีกลไกการทำงานอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "สลับข้อมูลคู่ที่ติดกันไปเรื่อยๆ"
      },
      {
        "key": "ข",
        "text": "ค้นหาข้อมูลที่น้อยที่สุดในส่วนที่ยังไม่ได้จัดเรียง แล้วนำมาสลับวางไว้ที่ตำแหน่งแรกของรอบนั้นๆ"
      },
      {
        "key": "ค",
        "text": "แบ่งข้อมูลออกเป็นสองส่วนเท่าๆ กันเสมอ"
      },
      {
        "key": "ง",
        "text": "แทรกข้อมูลลงในตำแหน่งที่ถูกต้องทีละตัว"
      }
    ],
    "answer": "ข",
    "explanation": "Selection Sort เลือกตัวที่น้อยที่สุดมาวางสลับไว้ตำแหน่งหน้าสุดของรอบนั้นๆ"
  },
  {
    "id": 118,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "string char str[10] = \"HELLO\"; จะใช้พื้นที่ Memory ทั้งหมดกี่ Bytes (สมมติ char ขนาด 1 byte)?",
    "options": [
      {
        "key": "ก",
        "text": "5 Bytes"
      },
      {
        "key": "ข",
        "text": "6 Bytes"
      },
      {
        "key": "ค",
        "text": "10 Bytes"
      },
      {
        "key": "ง",
        "text": "11 Bytes"
      }
    ],
    "answer": "ค",
    "explanation": "ประกาศขนาดไว้เท่าใด จะกินพื้นที่ Memory ตามขนาดนั้น: char str[10] ใช้ 10 Bytes"
  },
  {
    "id": 119,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ถ้าทำ Push ข้อมูล 1, 2, 3 เข้าไปใน Stack ตามลำดับ แล้วสั่ง Pop ออก 2 ครั้ง ข้อมูลที่เหลือใน Stack คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "2"
      },
      {
        "key": "ค",
        "text": "1"
      },
      {
        "key": "ง",
        "text": "สว่าง/ว่างเปล่า"
      }
    ],
    "answer": "ค",
    "explanation": "Push(1), Push(2), Push(3) -> Pop() เอา 3 ออก -> Pop() เอา 2 ออก เหลือ 1"
  },
  {
    "id": 120,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่ง sizeof(arr) / sizeof(arr[0]) ใช้ประโยชน์อย่างไรในภาษา C?",
    "options": [
      {
        "key": "ก",
        "text": "คำนวณหา Memory Address ของอาร์เรย์"
      },
      {
        "key": "ข",
        "text": "คำนวณหาจำนวน Element (ความยาว) ของ Static Array"
      },
      {
        "key": "ค",
        "text": "เคลียร์ค่าข้อมูลในอาร์เรย์"
      },
      {
        "key": "ง",
        "text": "ตรวจสอบว่าอาร์เรย์ว่างเปล่าหรือไม่"
      }
    ],
    "answer": "ข",
    "explanation": "sizeof(arr) (ขนาดทั้งหมด) หารด้วย sizeof(arr[0]) (ขนาด 1 element) ได้ผลลัพธ์เป็นจำนวน Element ใน Array"
  }
]
};

// Default pointer for backward compatibility
const quizQuestions = quizData.basic;

        "text": "Application Software"
      },
      {
        "key": "ง",
        "text": "Output Unit"
      }
    ],
    "answer": "ค",
    "explanation": "Application Software จัดเป็นซอฟต์แวร์ ไม่ใช่ส่วนประกอบของฮาร์ดแวร์"
  },
  {
    "id": 2,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "หน่วยประมวลผลกลาง (CPU) ประกอบด้วยส่วนสำคัญใดบ้าง?",
    "options": [
      {
        "key": "ก",
        "text": "Input Unit และ Output Unit"
      },
      {
        "key": "ข",
        "text": "Control Unit และ Arithmetic & Logic Unit (ALU)"
      },
      {
        "key": "ค",
        "text": "Memory Unit และ Storage Unit"
      },
      {
        "key": "ง",
        "text": "System Software และ Application Software"
      }
    ],
    "answer": "ข",
    "explanation": "CPU ประกอบด้วยหน่วยควบคุม (Control Unit) และหน่วยคำนวณ/ตรรกะ (ALU)"
  },
  {
    "id": 3,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "โปรแกรมประเภท Operating System (OS) จัดเป็นซอฟต์แวร์ประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "Application Software"
      },
      {
        "key": "ข",
        "text": "System Software"
      },
      {
        "key": "ค",
        "text": "Utility Software"
      },
      {
        "key": "ง",
        "text": "Peopleware"
      }
    ],
    "answer": "ข",
    "explanation": "OS จัดเป็นซอฟต์แวร์ระบบ (System Software)"
  },
  {
    "id": 4,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ขั้นตอนแรกของกระบวนการพัฒนาซอฟต์แวร์ (SDLC) คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "การออกแบบขั้นตอนวิธี (Design Algorithm)"
      },
      {
        "key": "ข",
        "text": "การกำหนดความต้องการของการแก้ปัญหา (Specifying Requirements)"
      },
      {
        "key": "ค",
        "text": "การสร้างโปรแกรม (Implement/Coding)"
      },
      {
        "key": "ง",
        "text": "การทดสอบและตรวจสอบ (Testing & Verification)"
      }
    ],
    "answer": "ข",
    "explanation": "ขั้นตอนแรกคือการกำหนดความต้องการของปัญหา (Specifying Requirements)"
  },
  {
    "id": 5,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อดีของพัฒนาซอฟต์แวร์แบบ Waterfall Model คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "สามารถปรับเปลี่ยนความต้องการได้ตลอดเวลา"
      },
      {
        "key": "ข",
        "text": "ได้ซอฟต์แวร์ที่มีคุณภาพสูงและบั๊กน้อยเนื่องจากวางแผนชัดเจน"
      },
      {
        "key": "ค",
        "text": "ไม่ต้องจัดทำเอกสารประกอบ"
      },
      {
        "key": "ง",
        "text": "เหมาะกับโครงการที่ไม่มีความแน่นอนสูง"
      }
    ],
    "answer": "ข",
    "explanation": "Waterfall มีโครงสร้างชัดเจน ทำทีละขั้นตอน ทำให้งานคุณภาพสูง บั๊กน้อย"
  },
  {
    "id": 6,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ซอฟต์แวร์การพัฒนาแบบใดที่ไม่เหมาะกับโครงการขนาดใหญ่และไม่มีการจัดทำเอกสาร SRS?",
    "options": [
      {
        "key": "ก",
        "text": "Waterfall Model"
      },
      {
        "key": "ข",
        "text": "Agile Model"
      },
      {
        "key": "ค",
        "text": "Big Bang Model"
      },
      {
        "key": "ง",
        "text": "Spiral Model"
      }
    ],
    "answer": "ค",
    "explanation": "Big Bang Model ไม่มีรูปแบบ วางแผน หรือเอกสาร เสี่ยงสูงมาก"
  },
  {
    "id": 7,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดคือลักษณะสำคัญของ Agile Model?",
    "options": [
      {
        "key": "ก",
        "text": "ทำงานเป็นขั้นตอนห้ามย้อนกลับ"
      },
      {
        "key": "ข",
        "text": "แบ่งการทำงานเป็นรอบสั้นๆ (Iterative) และปรับเปลี่ยน Requirement ได้รวดเร็ว"
      },
      {
        "key": "ค",
        "text": "เน้นการทำเอกสารให้สมบูรณ์ก่อนเริ่มเขียนโค้ด"
      },
      {
        "key": "ง",
        "text": "เหมาะสำหรับการพัฒนาแบบคนเดียวโดยไม่วางแผน"
      }
    ],
    "answer": "ข",
    "explanation": "Agile มุ่งเน้นการปรับตัว รวดเร็ว ซอยงานเป็นรอบสั้นๆ"
  },
  {
    "id": 8,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การแปลงปี ค.ศ. เป็น พ.ศ. มีความสัมพันธ์ระหว่างข้อมูลนำเข้าและผลลัพธ์อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "พ.ศ. = ค.ศ. - 543"
      },
      {
        "key": "ข",
        "text": "พ.ศ. = ค.ศ. + 543"
      },
      {
        "key": "ค",
        "text": "พ.ศ. = ค.ศ. * 543"
      },
      {
        "key": "ง",
        "text": "พ.ศ. = ค.ศ. / 543"
      }
    ],
    "answer": "ข",
    "explanation": "พ.ศ. มากกว่า ค.ศ. อยู่ 543 ปี ดังนั้น พ.ศ. = ค.ศ. + 543"
  },
  {
    "id": 9,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "บุคลากรทางคอมพิวเตอร์ประเภทใดทำหน้าที่วิเคราะห์และออกแบบระบบซอฟต์แวร์?",
    "options": [
      {
        "key": "ก",
        "text": "Programmer"
      },
      {
        "key": "ข",
        "text": "System Analyst (SA)"
      },
      {
        "key": "ค",
        "text": "Network Administrator"
      },
      {
        "key": "ง",
        "text": "End User"
      }
    ],
    "answer": "ข",
    "explanation": "System Analyst (SA) ทำหน้าที่วิเคราะห์และออกแบบระบบ"
  },
  {
    "id": 10,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ขั้นตอนใดใน SDLC ที่ทำหน้าที่แก้ไขข้อผิดพลาดหลังจากนำโปรแกรมไปใช้งานจริง?",
    "options": [
      {
        "key": "ก",
        "text": "Testing"
      },
      {
        "key": "ข",
        "text": "Design"
      },
      {
        "key": "ค",
        "text": "Maintenance & Update"
      },
      {
        "key": "ง",
        "text": "Implementation"
      }
    ],
    "answer": "ค",
    "explanation": "ขั้นตอนบำรุงรักษา (Maintenance) ทำหน้าที่ดูแลแก้ไขหลังนำไปใช้งานจริง"
  },
  {
    "id": 11,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดต่อไปนี้จัดเป็นซอฟต์แวร์ประยุกต์ (Application Software)?",
    "options": [
      {
        "key": "ก",
        "text": "Windows 11"
      },
      {
        "key": "ข",
        "text": "macOS"
      },
      {
        "key": "ค",
        "text": "Microsoft Word"
      },
      {
        "key": "ง",
        "text": "Ubuntu Linux"
      }
    ],
    "answer": "ค",
    "explanation": "Microsoft Word คือโปรแกรมประยุกต์ใช้งานเฉพาะทาง"
  },
  {
    "id": 12,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "หน่วยความจำประเภท RAM มีลักษณะการทำงานอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ข้อมูลไม่สูญหายเมื่อปิดเครื่อง"
      },
      {
        "key": "ข",
        "text": "อ่านข้อมูลได้เพียงอย่างเดียว"
      },
      {
        "key": "ค",
        "text": "หน่วยความจำชั่วคราว ข้อมูลหายเมื่อดับไฟ"
      },
      {
        "key": "ง",
        "text": "เก็บข้อมูลถาวรในรูปแบบจานแม่เหล็ก"
      }
    ],
    "answer": "ค",
    "explanation": "RAM เป็นหน่วยความจำชั่วคราว ข้อมูลจะหายไปเมื่อไม่มีกระแสไฟฟ้า"
  },
  {
    "id": 13,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การออกแบบส่วนติดต่อกับผู้ใช้ (User Interface) อยู่ในขั้นตอนใดของ SDLC?",
    "options": [
      {
        "key": "ก",
        "text": "Specifying Requirements"
      },
      {
        "key": "ข",
        "text": "Design"
      },
      {
        "key": "ค",
        "text": "Testing"
      },
      {
        "key": "ง",
        "text": "Maintenance"
      }
    ],
    "answer": "ข",
    "explanation": "การออกแบบส่วนติดต่อผู้ใช้จัดอยู่ในขั้นตอน Design"
  },
  {
    "id": 14,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "หากโครงการพัฒนาซอฟต์แวร์ต้องการปรับเปลี่ยน Requirement บ่อยครั้งตามความต้องการของลูกค้า ควรเลือกใช้โมเดลใด?",
    "options": [
      {
        "key": "ก",
        "text": "Waterfall Model"
      },
      {
        "key": "ข",
        "text": "Big Bang Model"
      },
      {
        "key": "ค",
        "text": "Agile Model"
      },
      {
        "key": "ง",
        "text": "Linear Model"
      }
    ],
    "answer": "ค",
    "explanation": "Agile ยืดหยุ่นสูง เหมาะกับโครงการที่ Requirement ปรับเปลี่ยนบ่อย"
  },
  {
    "id": 15,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "สิ่งใดที่เป็นข้อมูลนำเข้า (Input) ของโปรแกรมคำนวณพื้นที่สามเหลี่ยม?",
    "options": [
      {
        "key": "ก",
        "text": "พื้นที่สามเหลี่ยม"
      },
      {
        "key": "ข",
        "text": "ความยาวฐาน และ ความสูง"
      },
      {
        "key": "ค",
        "text": "สูตร 1/2 * ฐาน * สูง"
      },
      {
        "key": "ง",
        "text": "ค่าคงที่ 0.5"
      }
    ],
    "answer": "ข",
    "explanation": "ความยาวฐานและความสูง คือข้อมูลเข้าที่ต้องรับจากผู้ใช้เพื่อนำไปคำนวณ"
  },
  {
    "id": 16,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อเสียสำคัญของ Big Bang Model คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้เวลาวางแผนนานเกินไป"
      },
      {
        "key": "ข",
        "text": "มีความเสี่ยงสูงที่จะเกิดข้อผิดพลาดและไม่ได้ฟังก์ชันตามต้องการ"
      },
      {
        "key": "ค",
        "text": "มีค่าใช้จ่ายในการทำเอกสารสูง"
      },
      {
        "key": "ง",
        "text": "โครงสร้างซับซ้อนเกินไป"
      }
    ],
    "answer": "ข",
    "explanation": "Big Bang ไม่มีการวางแผน ทำให้เสี่ยงพบข้อผิดพลาดสูงมาก"
  },
  {
    "id": 17,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การเขียน Test Case เพื่อทดสอบโปรแกรม ควรทำในขั้นตอนใดเป็นอย่างน้อย?",
    "options": [
      {
        "key": "ก",
        "text": "วางแผนล่วงหน้าตั้งแต่ขั้นตอนการออกแบบ และทดสอบในขั้นตอน Testing"
      },
      {
        "key": "ข",
        "text": "หลังนำโปรแกรมขึ้นใช้งานไปแล้ว 1 ปี"
      },
      {
        "key": "ค",
        "text": "ไม่จำเป็นต้องเขียน Test Case"
      },
      {
        "key": "ง",
        "text": "ทำเฉพาะเมื่อลูกค้าแจ้งบั๊ก"
      }
    ],
    "answer": "ก",
    "explanation": "ออกแบบการทดสอบไว้ล่วงหน้า แล้วนำไปใช้ทดสอบจริงในขั้น Testing"
  },
  {
    "id": 18,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "บุคลากรกลุ่มใดคือผู้ใช้งานซอฟต์แวร์ขั้นสุดท้าย?",
    "options": [
      {
        "key": "ก",
        "text": "System Analyst"
      },
      {
        "key": "ข",
        "text": "Developer"
      },
      {
        "key": "ค",
        "text": "End User"
      },
      {
        "key": "ง",
        "text": "Tester"
      }
    ],
    "answer": "ค",
    "explanation": "End User คือผู้ใช้งานซอฟต์แวร์ขั้นสุดท้าย"
  },
  {
    "id": 19,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดเรียงลำดับขั้นตอนใน Waterfall Model ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Coding -> Design -> Requirement -> Testing"
      },
      {
        "key": "ข",
        "text": "Requirement -> Design -> Implementation -> Testing -> Maintenance"
      },
      {
        "key": "ค",
        "text": "Design -> Requirement -> Testing -> Maintenance"
      },
      {
        "key": "ง",
        "text": "Testing -> Implementation -> Design -> Requirement"
      }
    ],
    "answer": "ข",
    "explanation": "ลำดับ Waterfall: Requirement -> Design -> Implementation -> Testing -> Maintenance"
  },
  {
    "id": 20,
    "category": "หมวดที่ 1: คอมพิวเตอร์ & SDLC (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ส่วนใดในองค์ประกอบคอมพิวเตอร์ที่ทำหน้าที่ตัดสินใจทางตรรกะ (เช่น มากกว่า, น้อยกว่า, เท่ากับ)?",
    "options": [
      {
        "key": "ก",
        "text": "Control Unit"
      },
      {
        "key": "ข",
        "text": "Arithmetic & Logic Unit (ALU)"
      },
      {
        "key": "ค",
        "text": "Main Memory"
      },
      {
        "key": "ง",
        "text": "Output Device"
      }
    ],
    "answer": "ข",
    "explanation": "ALU ทำหน้าที่คำนวณทางคณิตศาสตร์และตัดสินใจทางตรรกะ"
  },
  {
    "id": 21,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "\"อัลกอริทึม\" (Algorithm) หมายถึงอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "ภาษาโปรแกรมชนิดหนึ่ง"
      },
      {
        "key": "ข",
        "text": "ขั้นตอนวิธีการทำงานที่มีลำดับชัดเจนเพื่อแก้ปัญหา"
      },
      {
        "key": "ค",
        "text": "อุปกรณ์ฮาร์ดแวร์สำหรับประมวลผล"
      },
      {
        "key": "ง",
        "text": "ผลลัพธ์ที่ได้จากการรันโปรแกรม"
      }
    ],
    "answer": "ข",
    "explanation": "อัลกอริทึม คือลำดับขั้นตอนที่ชัดเจนในการแก้ปัญหา"
  },
  {
    "id": 22,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดไม่ใช่คุณสมบัติที่ดีของอัลกอริทึม?",
    "options": [
      {
        "key": "ก",
        "text": "มีจุดเริ่มต้นและจุดสิ้นสุดที่ชัดเจน"
      },
      {
        "key": "ข",
        "text": "มีขั้นตอนคลุมเครือเพื่อให้ปรับเปลี่ยนได้ตามใจชอบ"
      },
      {
        "key": "ค",
        "text": "แต่ละขั้นตอนสั้นและกระชับ"
      },
      {
        "key": "ง",
        "text": "ให้ผลลัพธ์ที่ถูกต้อง"
      }
    ],
    "answer": "ข",
    "explanation": "อัลกอริทึมต้องมีความชัดเจน ไม่คลุมเครือ"
  },
  {
    "id": 23,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การเขียนอธิบายขั้นตอนการทำงานโดยใช้ภาษาพูดผสมสัญลักษณ์ทางคณิตศาสตร์เรียกว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Flowchart"
      },
      {
        "key": "ข",
        "text": "Pseudo-code"
      },
      {
        "key": "ค",
        "text": "Source code"
      },
      {
        "key": "ง",
        "text": "Machine code"
      }
    ],
    "answer": "ข",
    "explanation": "รหัสเทียม (Pseudo-code) คือคำอธิบายขั้นตอนด้วยภาษาพูด"
  },
  {
    "id": 24,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์รูปสี่เหลี่ยมข้าวหลามตัด (Diamond) ในผังงาน (Flowchart) ใช้แทนการทำงานใด?",
    "options": [
      {
        "key": "ก",
        "text": "จุดเริ่มต้น/จบ"
      },
      {
        "key": "ข",
        "text": "การประมวลผล (Process)"
      },
      {
        "key": "ค",
        "text": "การตัดสินใจ/เงื่อนไข (Decision/Condition)"
      },
      {
        "key": "ง",
        "text": "การแสดงผลออกทางจอภาพ"
      }
    ],
    "answer": "ค",
    "explanation": "สี่เหลี่ยมข้าวหลามตัดใช้แทนการตัดสินใจหรือเลือกเงื่อนไข (Decision)"
  },
  {
    "id": 25,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ผังงานใดใช้แสดงการประมวลผลหรือกำหนดค่า (Process)?",
    "options": [
      {
        "key": "ก",
        "text": "วงกลม (Connector)"
      },
      {
        "key": "ข",
        "text": "สี่เหลี่ยมผืนผ้า (Rectangle)"
      },
      {
        "key": "ค",
        "text": "สี่เหลี่ยมข้าวหลามตัด (Diamond)"
      },
      {
        "key": "ง",
        "text": "สี่เหลี่ยมด้านขนาน (Parallelogram)"
      }
    ],
    "answer": "ข",
    "explanation": "สี่เหลี่ยมผืนผ้าใช้แทนการประมวลผล (Process)"
  },
  {
    "id": 26,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดคือประโยชน์หลักของการเขียนผังงาน (Flowchart)?",
    "options": [
      {
        "key": "ก",
        "text": "ช่วยให้คอมพิวเตอร์ประมวลผลได้เร็วขึ้น"
      },
      {
        "key": "ข",
        "text": "ช่วยให้เห็นลำดับการทำงานและตรรกะของโปรแกรมได้ชัดเจน"
      },
      {
        "key": "ค",
        "text": "ป้องกันไม่ให้เกิดไวรัสคอมพิวเตอร์"
      },
      {
        "key": "ง",
        "text": "ทำให้ไม่ต้องเขียนโค้ดโปรแกรม"
      }
    ],
    "answer": "ข",
    "explanation": "ผังงานช่วยถ่ายทอดตรรกะและลำดับขั้นตอนให้เข้าใจง่ายด้วยรูปภาพ"
  },
  {
    "id": 27,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การวิเคราะห์ปัญหาแบ่งเป็น 3 ขั้นตอนหลัก ข้อใดเรียงลำดับถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Process -> Input -> Output"
      },
      {
        "key": "ข",
        "text": "Input -> Process -> Output"
      },
      {
        "key": "ค",
        "text": "Output -> Input -> Process"
      },
      {
        "key": "ง",
        "text": "Input -> Output -> Process"
      }
    ],
    "answer": "ข",
    "explanation": "การวิเคราะห์ปัญหาเรียงจาก Input -> Process -> Output"
  },
  {
    "id": 28,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์รูปสี่เหลี่ยมด้านขนาน (Parallelogram) ในผังงานใช้ทำหน้าที่ใด?",
    "options": [
      {
        "key": "ก",
        "text": "การรับค่าข้อมูลเข้าหรือแสดงผลโดยไม่ระบุอุปกรณ์ (General Input/Output)"
      },
      {
        "key": "ข",
        "text": "การวนซ้ำ (Loop)"
      },
      {
        "key": "ค",
        "text": "จุดเชื่อมต่อหน้ากระดาษ"
      },
      {
        "key": "ง",
        "text": "การประมวลผลคำนวณ"
      }
    ],
    "answer": "ก",
    "explanation": "สี่เหลี่ยมด้านขนานใช้แสดง General Input/Output"
  },
  {
    "id": 29,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์รูปทรงวงมน หรือสี่เหลี่ยมผืนผ้าขอบมน ในผังงานแสดงถึงสิ่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "Start / End (จุดเริ่มต้น หรือ จุดสิ้นสุด)"
      },
      {
        "key": "ข",
        "text": "Manual Input"
      },
      {
        "key": "ค",
        "text": "Display บนหน้าจอ"
      },
      {
        "key": "ง",
        "text": "Document"
      }
    ],
    "answer": "ก",
    "explanation": "รูปทรงวงมน/ขอบมน ใช้แสดงจุด Start และ End"
  },
  {
    "id": 30,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "หากต้องการเชื่อมต่อผังงานที่อยู่ต่างหน้ากระดาษกัน ควรใช้สัญลักษณ์ใด?",
    "options": [
      {
        "key": "ก",
        "text": "Small Circle Connector"
      },
      {
        "key": "ข",
        "text": "Off-page Connector"
      },
      {
        "key": "ค",
        "text": "Decision Diamond"
      },
      {
        "key": "ง",
        "text": "Process Rectangle"
      }
    ],
    "answer": "ข",
    "explanation": "Off-page Connector ใช้เชื่อมต่อผังงานที่ข้ามไปอยู่คนละหน้ากระดาษ"
  },
  {
    "id": 31,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การออกแบบการแก้ปัญหาแบบ Top-down design หมายถึงข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "เขียนโค้ดจากล่างขึ้นบน"
      },
      {
        "key": "ข",
        "text": "เขียนขั้นตอนหลักก่อนแล้วค่อยแตกออกเป็นขั้นตอนย่อยๆ"
      },
      {
        "key": "ค",
        "text": "ทำงานเฉพาะส่วนท้ายก่อน"
      },
      {
        "key": "ง",
        "text": "รวมขั้นตอนย่อยเข้าเป็นขั้นตอนใหญ่เพียงขั้นตอนเดียว"
      }
    ],
    "answer": "ข",
    "explanation": "Top-down design คือการเขียนขั้นตอนหลักก่อนแล้วค่อยแตกรายละเอียดลงไป"
  },
  {
    "id": 32,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดคือลักษณะของ Pseudo-code ที่ดี?",
    "options": [
      {
        "key": "ก",
        "text": "ขึ้นกับภาษาใดภาษาหนึ่งโดยเฉพาะ เช่น ต้องเป็นโครงสร้าง Python เท่านั้น"
      },
      {
        "key": "ข",
        "text": "อ่านเข้าใจง่าย ไม่ขึ้นกับภาษาคอมพิวเตอร์ใดภาษาหนึ่ง"
      },
      {
        "key": "ค",
        "text": "ต้องมีสัญลักษณ์รูปภาพประกอบเสมอ"
      },
      {
        "key": "ง",
        "text": "ต้องยาวและซับซ้อน"
      }
    ],
    "answer": "ข",
    "explanation": "Pseudo-code ต้องอ่านเข้าใจง่าย ไม่ยึดติดกับไวยากรณ์ภาษาโปรแกรมใด"
  },
  {
    "id": 33,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "จากอัลกอริทึมการรับค่าตัวเลข 2 จำนวนแล้วหาค่ามากสุด ขั้นตอนการเปรียบเทียบจัดเป็นอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Input"
      },
      {
        "key": "ข",
        "text": "Process"
      },
      {
        "key": "ค",
        "text": "Output"
      },
      {
        "key": "ง",
        "text": "Storage"
      }
    ],
    "answer": "ข",
    "explanation": "การเปรียบเทียบจัดเป็นขั้นตอนการประมวลผล (Process)"
  },
  {
    "id": 34,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ทิศทางการทำงานในผังงานโดยทั่วไปจะเรียงลำดับอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "จากล่างขึ้นบน"
      },
      {
        "key": "ข",
        "text": "จากบนลงล่าง และ จากซ้ายไปขวา"
      },
      {
        "key": "ค",
        "text": "จากขวาไปซ้าย"
      },
      {
        "key": "ง",
        "text": "วนเป็นวงกลมเสมอ"
      }
    ],
    "answer": "ข",
    "explanation": "ผังงานสากลเขียนจาก บนลงล่าง และ ซ้ายไปขวา"
  },
  {
    "id": 35,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ลูกศร (Flow line) ในผังงานทำหน้าที่อะไร?",
    "options": [
      {
        "key": "ก",
        "text": "แสดงประเภทข้อมูล"
      },
      {
        "key": "ข",
        "text": "แสดงทิศทางและลำดับขั้นตอนการทำงาน"
      },
      {
        "key": "ค",
        "text": "แทนค่าตัวแปร"
      },
      {
        "key": "ง",
        "text": "เชื่อมต่อเงื่อนไข"
      }
    ],
    "answer": "ข",
    "explanation": "ลูกศร (Flow line) ใช้กำหนดทิศทางลำดับการทำงาน"
  },
  {
    "id": 36,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "หากต้องการรับค่าจากแป้นพิมพ์ในผังงานแบบระบุอุปกรณ์เฉพาะ สามารถใช้สัญลักษณ์ใด?",
    "options": [
      {
        "key": "ก",
        "text": "Manual Input"
      },
      {
        "key": "ข",
        "text": "Process"
      },
      {
        "key": "ค",
        "text": "Decision"
      },
      {
        "key": "ง",
        "text": "Terminator"
      }
    ],
    "answer": "ก",
    "explanation": "Manual Input (สี่เหลี่ยมสโลป) ใช้แสดงการรับค่าจากแป้นพิมพ์โดยตรง"
  },
  {
    "id": 37,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ในการเขียนผังงาน จุดเริ่มต้น (Start) และจุดจบ (End) ในหนึ่งผังงานควรมีกี่จุด?",
    "options": [
      {
        "key": "ก",
        "text": "Start 1 จุด, End หลายจุดได้แต่ควรมีจุดจบที่ชัดเจน"
      },
      {
        "key": "ข",
        "text": "Start หลายจุดได้"
      },
      {
        "key": "ค",
        "text": "ไม่จำเป็นต้องมี End"
      },
      {
        "key": "ง",
        "text": "มี Start ได้ไม่จำกัด"
      }
    ],
    "answer": "ก",
    "explanation": "ผังงานต้องมีจุด Start จุดเดียว และมีจุดสิ้นสุดชัดเจน"
  },
  {
    "id": 38,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใด ไม่ใช่ โครงสร้างควบคุมพื้นฐานในอัลกอริทึม?",
    "options": [
      {
        "key": "ก",
        "text": "โครงสร้างแบบเป็นลำดับ (Sequence)"
      },
      {
        "key": "ข",
        "text": "โครงสร้างแบบการเลือกทำ/เงื่อนไข (Selection)"
      },
      {
        "key": "ค",
        "text": "โครงสร้างแบบการวนซ้ำ (Iteration/Loop)"
      },
      {
        "key": "ง",
        "text": "โครงสร้างแบบสุ่มเดา (Randomization)"
      }
    ],
    "answer": "ง",
    "explanation": "โครงสร้างควบคุมหลักมี 3 แบบ: Sequence, Selection, Iteration"
  },
  {
    "id": 39,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การเขียน Pseudo-code คำว่า READ หรือ INPUT มักใช้แทนขั้นตอนใด?",
    "options": [
      {
        "key": "ก",
        "text": "การแสดงผลออกจอภาพ"
      },
      {
        "key": "ข",
        "text": "การรับข้อมูลเข้า"
      },
      {
        "key": "ค",
        "text": "การคำนวณทางคณิตศาสตร์"
      },
      {
        "key": "ง",
        "text": "การจบโปรแกรม"
      }
    ],
    "answer": "ข",
    "explanation": "READ/INPUT ใน Pseudo-code ใช้แทนการรับข้อมูลเข้า"
  },
  {
    "id": 40,
    "category": "หมวดที่ 2: อัลกอริทึม & ผังงาน (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "การเขียน Pseudo-code คำว่า PRINT หรือ DISPLAY มักใช้แทนขั้นตอนใด?",
    "options": [
      {
        "key": "ก",
        "text": "การรับข้อมูล"
      },
      {
        "key": "ข",
        "text": "การกำหนดค่าตัวแปร"
      },
      {
        "key": "ค",
        "text": "การแสดงผลลัพธ์"
      },
      {
        "key": "ง",
        "text": "การตรวจสอบเงื่อนไข"
      }
    ],
    "answer": "ค",
    "explanation": "PRINT/DISPLAY ใช้แทนการแสดงผลลัพธ์"
  },
  {
    "id": 41,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ใครคือผู้พัฒนาภาษา Python?",
    "options": [
      {
        "key": "ก",
        "text": "Dennis Ritchie"
      },
      {
        "key": "ข",
        "text": "James Gosling"
      },
      {
        "key": "ค",
        "text": "Guido van Rossum"
      },
      {
        "key": "ง",
        "text": "Linus Torvalds"
      }
    ],
    "answer": "ค",
    "explanation": "Guido van Rossum คือผู้สร้างภาษา Python"
  },
  {
    "id": 42,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ตัวแปลภาษาที่ใช้รันโค้ดภาษา Python เรียกว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Python Compiler"
      },
      {
        "key": "ข",
        "text": "Python Interpreter"
      },
      {
        "key": "ค",
        "text": "Python Assembler"
      },
      {
        "key": "ง",
        "text": "Python Executor"
      }
    ],
    "answer": "ข",
    "explanation": "Python ใช้โปรแกรมแปลภาษาแบบ Interpreter"
  },
  {
    "id": 43,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ภาษา Python เปิดตัวเผยแพร่สู่สาธารณะครั้งแรกใน ค.ศ. ใด?",
    "options": [
      {
        "key": "ก",
        "text": "1970"
      },
      {
        "key": "ข",
        "text": "1989"
      },
      {
        "key": "ค",
        "text": "1991"
      },
      {
        "key": "ง",
        "text": "2000"
      }
    ],
    "answer": "ค",
    "explanation": "Python เผยแพร่เวอร์ชันแรก (0.9.0) ในปี ค.ศ. 1991"
  },
  {
    "id": 44,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่งแสดงผลข้อความออกทางหน้าจอในภาษา Python คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "console.log()"
      },
      {
        "key": "ข",
        "text": "System.out.println()"
      },
      {
        "key": "ค",
        "text": "print()"
      },
      {
        "key": "ง",
        "text": "echo"
      }
    ],
    "answer": "ค",
    "explanation": "print() ใช้แสดงผลออกทางหน้าจอ"
  },
  {
    "id": 45,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่งใดใช้สำหรับรับข้อมูลจากผู้ใช้ทางแป้นพิมพ์ใน Python?",
    "options": [
      {
        "key": "ก",
        "text": "get()"
      },
      {
        "key": "ข",
        "text": "read()"
      },
      {
        "key": "ค",
        "text": "input()"
      },
      {
        "key": "ง",
        "text": "scanf()"
      }
    ],
    "answer": "ค",
    "explanation": "input() ใช้รับค่าจากผู้ใช้"
  },
  {
    "id": 46,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่ง input() ใน Python จะคืนค่ากลับมาเป็นข้อมูลชนิดใดเสมอ?",
    "options": [
      {
        "key": "ก",
        "text": "Integer"
      },
      {
        "key": "ข",
        "text": "Float"
      },
      {
        "key": "ค",
        "text": "String"
      },
      {
        "key": "ง",
        "text": "Boolean"
      }
    ],
    "answer": "ค",
    "explanation": "ค่าที่รับจาก input() จะมีชนิดเป็น String เสมอ"
  },
  {
    "id": 47,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "โครงสร้างคำสั่งเงื่อนไขใน Python ข้อใดถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "if condition { }"
      },
      {
        "key": "ข",
        "text": "if (condition) then"
      },
      {
        "key": "ค",
        "text": "if condition:"
      },
      {
        "key": "ง",
        "text": "if condition begin"
      }
    ],
    "answer": "ค",
    "explanation": "เงื่อนไขใน Python ขึ้นต้นด้วย if ตามด้วยเงื่อนไขและปิดด้วยเครื่องหมายโคลอน :"
  },
  {
    "id": 48,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ภาษา Python ใช้สิ่งใดในการจัดกลุ่มบล็อกของโค้ด (Block of Code)?",
    "options": [
      {
        "key": "ก",
        "text": "เครื่องหมายปีกกา { }"
      },
      {
        "key": "ข",
        "text": "การย่อหน้า (Indentation / Tab / Space)"
      },
      {
        "key": "ค",
        "text": "เครื่องหมาย BEGIN ... END"
      },
      {
        "key": "ง",
        "text": "เครื่องหมายสี่เหลี่ยม [ ]"
      }
    ],
    "answer": "ข",
    "explanation": "Python ใช้การย่อหน้า (Indentation) ในการแบ่งบล็อกโค้ด"
  },
  {
    "id": 49,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่งเงื่อนไขใดใน Python ใช้เมื่อต้องการตรวจสอบหลายเงื่อนไขถัดจาก if?",
    "options": [
      {
        "key": "ก",
        "text": "else if"
      },
      {
        "key": "ข",
        "text": "elif"
      },
      {
        "key": "ค",
        "text": "then"
      },
      {
        "key": "ง",
        "text": "switch"
      }
    ],
    "answer": "ข",
    "explanation": "elif ใช้สำหรับการตรวจสอบเงื่อนไขถัดไป"
  },
  {
    "id": 50,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "โครงสร้างการทำงานแบบวนซ้ำชนิดใดจะทำงานตราบเท่าที่เงื่อนไขยังคงเป็นจริง (True)?",
    "options": [
      {
        "key": "ก",
        "text": "if"
      },
      {
        "key": "ข",
        "text": "while"
      },
      {
        "key": "ค",
        "text": "for-else"
      },
      {
        "key": "ง",
        "text": "switch-case"
      }
    ],
    "answer": "ข",
    "explanation": "while จะวนลูปทำซ้ำจนกว่าเงื่อนไขจะกลายเป็น False"
  },
  {
    "id": 51,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "หากต้องการออกจากการทำงานในลูป while ทันที สามารถใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "exit"
      },
      {
        "key": "ข",
        "text": "stop"
      },
      {
        "key": "ค",
        "text": "break"
      },
      {
        "key": "ง",
        "text": "continue"
      }
    ],
    "answer": "ค",
    "explanation": "break ใช้สำหรับหยุดการวนลูปทันที"
  },
  {
    "id": 52,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "คำสั่ง continue ในลูปมีไว้เพื่ออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "หยุดการทำงานของลูปทันที"
      },
      {
        "key": "ข",
        "text": "ข้ามการทำงานที่เหลือในรอบปัจจุบันแล้วไปเริ่มรอบถัดไป"
      },
      {
        "key": "ค",
        "text": "จบการทำงานของโปรแกรมทั้งหมด"
      },
      {
        "key": "ง",
        "text": "วนลูปซ้ำรอบเดิมอีกครั้ง"
      }
    ],
    "answer": "ข",
    "explanation": "continue ใช้ข้ามโค้ดที่เหลือในรอบนั้น แล้วไปเริ่มรอบถัดไป"
  },
  {
    "id": 53,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "จุดเด่นของภาษา Python เมื่อเทียบกับ C++ หรือ Java คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "โค้ดกระชับ อ่านง่าย จำนวนบรรทัดน้อยกว่า"
      },
      {
        "key": "ข",
        "text": "ไม่ต้องใช้ตัวแปลภาษา"
      },
      {
        "key": "ค",
        "text": "ทำงานเฉพาะบนระบบปฏิบัติการ Windows เท่านั้น"
      },
      {
        "key": "ง",
        "text": "ไม่รองรับการเขียนโปรแกรมเชิงวัตถุ"
      }
    ],
    "answer": "ก",
    "explanation": "Python อ่านง่าย โค้ดสั้น กระชับ"
  },
  {
    "id": 54,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "การเช็กเงื่อนไขซ้อนเงื่อนไข เรียกว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Multi-if"
      },
      {
        "key": "ข",
        "text": "Nest-if"
      },
      {
        "key": "ค",
        "text": "Double-if"
      },
      {
        "key": "ง",
        "text": "Loop-if"
      }
    ],
    "answer": "ข",
    "explanation": "Nest-if คือการใช้คำสั่ง if ซ้อนภายใน if อีกที"
  },
  {
    "id": 55,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "หากกำหนด x = 5 แล้วสั่ง while x > 0: print(x) โดยไม่มีการลดค่า x จะเกิดอะไรขึ้น?",
    "options": [
      {
        "key": "ก",
        "text": "ทำงาน 5 ครั้งแล้วจบ"
      },
      {
        "key": "ข",
        "text": "เกิด Infinite Loop (ลูปไม่สิ้นสุด)"
      },
      {
        "key": "ค",
        "text": "โปรแกรมแจ้ง Error ทันที"
      },
      {
        "key": "ง",
        "text": "ไม่แสดงผลใดๆ"
      }
    ],
    "answer": "ข",
    "explanation": "เงื่อนไข 5 > 0 เป็นจริงตลอดเวลา ทำให้เกิด Infinite Loop"
  },
  {
    "id": 56,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "เครื่องหมายที่ใช้เชื่อมเงื่อนไขใน Python เพื่อให้เป็นจริงทั้งคู่คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "AND"
      },
      {
        "key": "ข",
        "text": "and"
      },
      {
        "key": "ค",
        "text": "&&"
      },
      {
        "key": "ง",
        "text": "&"
      }
    ],
    "answer": "ข",
    "explanation": "Python ใช้คำว่า and เป็นตัวดำเนินการตรรกศาสตร์"
  },
  {
    "id": 57,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "สัญลักษณ์ที่ใช้เริ่มต้นคำอธิบายโค้ด (Comment) บรรทัดเดียวใน Python คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "//"
      },
      {
        "key": "ข",
        "text": "/*"
      },
      {
        "key": "ค",
        "text": "#"
      },
      {
        "key": "ง",
        "text": "--"
      }
    ],
    "answer": "ค",
    "explanation": "เครื่องหมาย # ใช้เขียน Comment บรรทัดเดียว"
  },
  {
    "id": 58,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดแสดงการใช้งาน if-else ถูกต้องตามไวยากรณ์ Python?",
    "options": [
      {
        "key": "ก",
        "text": "if x > 5: print(\"Yes\") else: print(\"No\")"
      },
      {
        "key": "ข",
        "text": "if x > 5: print(\"Yes\") else: print(\"No\")"
      },
      {
        "key": "ค",
        "text": "if x > 5 then print(\"Yes\") else print(\"No\")"
      },
      {
        "key": "ง",
        "text": "if (x > 5) { print(\"Yes\"); } else { print(\"No\"); }"
      }
    ],
    "answer": "ข",
    "explanation": "ข. ถูกต้องตามไวยากรณ์ย่อหน้าของ Python"
  },
  {
    "id": 59,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดคือผลลัพธ์ของโค้ด x = 3; if x > 5: print(\"A\") elif x == 3: print(\"B\") else: print(\"C\")?",
    "options": [
      {
        "key": "ก",
        "text": "A"
      },
      {
        "key": "ข",
        "text": "B"
      },
      {
        "key": "ค",
        "text": "C"
      },
      {
        "key": "ง",
        "text": "B และ C"
      }
    ],
    "answer": "ข",
    "explanation": "x = 3 เข้าเงื่อนไข elif x == 3: จึงพิมพ์ 'B'"
  },
  {
    "id": 60,
    "category": "หมวดที่ 3: ภาษา Python เบื้องต้น (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "โปรแกรมเมอร์ชาวดัตช์ที่เป็นผู้สร้างภาษา Python มีชื่อว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Bjarne Stroustrup"
      },
      {
        "key": "ข",
        "text": "Guido van Rossum"
      },
      {
        "key": "ค",
        "text": "Tim Berners-Lee"
      },
      {
        "key": "ง",
        "text": "James Gosling"
      }
    ],
    "answer": "ข",
    "explanation": "Guido van Rossum เป็นโปรแกรมเมอร์ชาวดัตช์"
  },
  {
    "id": 61,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "การกำหนดค่าให้กับตัวแปรใน Python ใช้เครื่องหมายใด?",
    "options": [
      {
        "key": "ก",
        "text": "=="
      },
      {
        "key": "ข",
        "text": "="
      },
      {
        "key": "ค",
        "text": ":="
      },
      {
        "key": "ง",
        "text": "<-"
      }
    ],
    "answer": "ข",
    "explanation": "เครื่องหมาย = ใช้สำหรับกำหนดค่าให้ตัวแปร"
  },
  {
    "id": 62,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อมูลชนิดจำนวนเต็มใน Python เรียกว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Float"
      },
      {
        "key": "ข",
        "text": "Integer (int)"
      },
      {
        "key": "ค",
        "text": "String (str)"
      },
      {
        "key": "ง",
        "text": "Boolean (bool)"
      }
    ],
    "answer": "ข",
    "explanation": "จำนวนเต็มคือ Integer (int)"
  },
  {
    "id": 63,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อมูลตัวเลขที่มีจุดทศนิยมจัดเป็นชนิดข้อมูลใด?",
    "options": [
      {
        "key": "ก",
        "text": "Integer"
      },
      {
        "key": "ข",
        "text": "Float"
      },
      {
        "key": "ค",
        "text": "Complex"
      },
      {
        "key": "ง",
        "text": "Character"
      }
    ],
    "answer": "ข",
    "explanation": "ตัวเลขมีทศนิยมคือ Float"
  },
  {
    "id": 64,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือตัวดำเนินการหาเศษจากการหาร (Modulus)?",
    "options": [
      {
        "key": "ก",
        "text": "/"
      },
      {
        "key": "ข",
        "text": "//"
      },
      {
        "key": "ค",
        "text": "%"
      },
      {
        "key": "ง",
        "text": "**"
      }
    ],
    "answer": "ค",
    "explanation": "% (Modulus) ใช้หาเศษจากการหาร"
  },
  {
    "id": 65,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของนิพจน์ 10 // 3 ใน Python คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "3.3333"
      },
      {
        "key": "ข",
        "text": "3"
      },
      {
        "key": "ค",
        "text": "1"
      },
      {
        "key": "ง",
        "text": "3.0"
      }
    ],
    "answer": "ข",
    "explanation": "// คือการหารปัดเศษทิ้ง 10 // 3 = 3"
  },
  {
    "id": 66,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของนิพจน์ 2 ** 3 ใน Python คือเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "6"
      },
      {
        "key": "ข",
        "text": "8"
      },
      {
        "key": "ค",
        "text": "9"
      },
      {
        "key": "ง",
        "text": "5"
      }
    ],
    "answer": "ข",
    "explanation": "** คือตัวดำเนินการยกกำลัง 2^3 = 8"
  },
  {
    "id": 67,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของ 7 % 3 คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "2"
      },
      {
        "key": "ข",
        "text": "1"
      },
      {
        "key": "ค",
        "text": "2.33"
      },
      {
        "key": "ง",
        "text": "0"
      }
    ],
    "answer": "ข",
    "explanation": "7 / 3 = 2 เศษ 1 ดังนั้น 7 % 3 ได้ 1"
  },
  {
    "id": 68,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "หากต้องการเปลี่ยนชนิดข้อมูลจาก String \"123\" ให้เป็น Integer ต้องใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "str(\"123\")"
      },
      {
        "key": "ข",
        "text": "int(\"123\")"
      },
      {
        "key": "ค",
        "text": "float(\"123\")"
      },
      {
        "key": "ง",
        "text": "bool(\"123\")"
      }
    ],
    "answer": "ข",
    "explanation": "int() แปลงข้อความตัวเลขเป็นจำนวนเต็ม"
  },
  {
    "id": 69,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือการตั้งชื่อตัวแปรที่ ถูกต้อง ในภาษา Python?",
    "options": [
      {
        "key": "ก",
        "text": "2my_var"
      },
      {
        "key": "ข",
        "text": "my-var"
      },
      {
        "key": "ค",
        "text": "my_var"
      },
      {
        "key": "ง",
        "text": "class"
      }
    ],
    "answer": "ค",
    "explanation": "my_var ตั้งชื่อถูกต้องตามหลักสากล"
  },
  {
    "id": 70,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือการตั้งชื่อตัวแปรที่ ผิดกฎ ในภาษา Python?",
    "options": [
      {
        "key": "ก",
        "text": "user_age"
      },
      {
        "key": "ข",
        "text": "_total"
      },
      {
        "key": "ค",
        "text": "first-name"
      },
      {
        "key": "ง",
        "text": "score2"
      }
    ],
    "answer": "ค",
    "explanation": "ห้ามใช้เครื่องหมายลบ - ในการตั้งชื่อตัวแปร"
  },
  {
    "id": 71,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ตัวดำเนินการเปรียบเทียบ \"ไม่เท่ากับ\" ใน Python คือสัญลักษณ์ใด?",
    "options": [
      {
        "key": "ก",
        "text": "<>"
      },
      {
        "key": "ข",
        "text": "!="
      },
      {
        "key": "ค",
        "text": "=/="
      },
      {
        "key": "ง",
        "text": "NOT="
      }
    ],
    "answer": "ข",
    "explanation": "!= แทนความหมาย ไม่เท่ากับ"
  },
  {
    "id": 72,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของ not True คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "True"
      },
      {
        "key": "ข",
        "text": "False"
      },
      {
        "key": "ค",
        "text": "None"
      },
      {
        "key": "ง",
        "text": "Error"
      }
    ],
    "answer": "ข",
    "explanation": "not True ตรงข้ามกับ True จึงได้ False"
  },
  {
    "id": 73,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "นิพจน์ (5 > 3) and (2 > 4) ได้ผลลัพธ์เป็นอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "True"
      },
      {
        "key": "ข",
        "text": "False"
      },
      {
        "key": "ค",
        "text": "5"
      },
      {
        "key": "ง",
        "text": "Error"
      }
    ],
    "answer": "ข",
    "explanation": "True and False ผลลัพธ์ได้ False"
  },
  {
    "id": 74,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "นิพจน์ (5 > 3) or (2 > 4) ได้ผลลัพธ์เป็นอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "True"
      },
      {
        "key": "ข",
        "text": "False"
      },
      {
        "key": "ค",
        "text": "2"
      },
      {
        "key": "ง",
        "text": "Error"
      }
    ],
    "answer": "ก",
    "explanation": "True or False ผลลัพธ์ได้ True"
  },
  {
    "id": 75,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ชนิดข้อมูล Boolean ใน Python มีค่าที่เป็นไปได้กี่ค่า อะไรบ้าง?",
    "options": [
      {
        "key": "ก",
        "text": "2 ค่า คือ True และ False"
      },
      {
        "key": "ข",
        "text": "2 ค่า คือ yes และ no"
      },
      {
        "key": "ค",
        "text": "2 ค่า คือ 1 และ 0 เท่านั้น"
      },
      {
        "key": "ง",
        "text": "ไม่จำกัดจำนวนค่า"
      }
    ],
    "answer": "ก",
    "explanation": "Boolean มี 2 ค่าคือ True และ False"
  },
  {
    "id": 76,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อความใน Python ต้องอยู่ภายในเครื่องหมายใด?",
    "options": [
      {
        "key": "ก",
        "text": "Single quote (' ') หรือ Double quote (\" \")"
      },
      {
        "key": "ข",
        "text": "เครื่องหมาย ( )"
      },
      {
        "key": "ค",
        "text": "เครื่องหมาย < >"
      },
      {
        "key": "ง",
        "text": "เครื่องหมาย { }"
      }
    ],
    "answer": "ก",
    "explanation": "String ซ้อนด้วย Single หรือ Double quote ได้"
  },
  {
    "id": 77,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของ str(5) + str(5) ใน Python คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "10"
      },
      {
        "key": "ข",
        "text": "\"55\""
      },
      {
        "key": "ค",
        "text": "\"10\""
      },
      {
        "key": "ง",
        "text": "Error"
      }
    ],
    "answer": "ข",
    "explanation": "'5' + '5' คือการนำข้อความมาต่อกันได้ '55'"
  },
  {
    "id": 78,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ผลลัพธ์ของ 10 / 2 ใน Python 3 จะได้ข้อมูลชนิดใดและมีค่าเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "int ค่า 5"
      },
      {
        "key": "ข",
        "text": "float ค่า 5.0"
      },
      {
        "key": "ค",
        "text": "str ค่า \"5\""
      },
      {
        "key": "ง",
        "text": "int ค่า 5.0"
      }
    ],
    "answer": "ข",
    "explanation": "การหารด้วย / ใน Python 3 จะคืนค่าเป็น float (5.0) เสมอ"
  },
  {
    "id": 79,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "คำสั่ง type(3.14) จะคืนค่าผลลัพธ์เป็นอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "<class 'int'>"
      },
      {
        "key": "ข",
        "text": "<class 'float'>"
      },
      {
        "key": "ค",
        "text": "<class 'str'>"
      },
      {
        "key": "ง",
        "text": "<class 'bool'>"
      }
    ],
    "answer": "ข",
    "explanation": "3.14 เป็นทศนิยม ชนิดข้อมูลคือ <class 'float'>"
  },
  {
    "id": 80,
    "category": "หมวดที่ 4: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "หากต้องการคำนวณหาความยาวด้าน C ของสามเหลี่ยมมุมฉากจากสูตร C = sqrt(A^2 + B^2) ตัวดำเนินการใดใช้สำหรับยกกำลัง?",
    "options": [
      {
        "key": "ก",
        "text": "^"
      },
      {
        "key": "ข",
        "text": "**"
      },
      {
        "key": "ค",
        "text": "sqrt()"
      },
      {
        "key": "ง",
        "text": "//"
      }
    ],
    "answer": "ข",
    "explanation": "** ใช้ยกกำลัง เช่น A**2 + B**2"
  },
  {
    "id": 81,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "Git จัดเป็นระบบ Version Control ประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "Local VCS"
      },
      {
        "key": "ข",
        "text": "Centralized VCS"
      },
      {
        "key": "ค",
        "text": "Distributed VCS (DVCS)"
      },
      {
        "key": "ง",
        "text": "Monolithic VCS"
      }
    ],
    "answer": "ค",
    "explanation": "Git เป็น Distributed VCS"
  },
  {
    "id": 82,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่งใดใช้เริ่มต้นสร้าง Git Repository เปล่าในโฟลเดอร์ปัจจุบัน?",
    "options": [
      {
        "key": "ก",
        "text": "git start"
      },
      {
        "key": "ข",
        "text": "git create"
      },
      {
        "key": "ค",
        "text": "git init"
      },
      {
        "key": "ง",
        "text": "git new"
      }
    ],
    "answer": "ค",
    "explanation": "git init สร้าง Git Repository ใหม่"
  },
  {
    "id": 83,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "สภาวะใดใน Git ที่เป็นพื้นที่เตรียมไฟล์ก่อนทำการบันทึก (Commit)?",
    "options": [
      {
        "key": "ก",
        "text": "Working Directory"
      },
      {
        "key": "ข",
        "text": "Staging Area"
      },
      {
        "key": "ค",
        "text": "Local Repository"
      },
      {
        "key": "ง",
        "text": "Remote Repository"
      }
    ],
    "answer": "ข",
    "explanation": "Staging Area คือพื้นที่เตรียมไฟล์ก่อน Commit"
  },
  {
    "id": 84,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่งใดใช้ย้ายไฟล์ main.py เข้าสู่ Staging Area?",
    "options": [
      {
        "key": "ก",
        "text": "git commit main.py"
      },
      {
        "key": "ข",
        "text": "git save main.py"
      },
      {
        "key": "ค",
        "text": "git add main.py"
      },
      {
        "key": "ง",
        "text": "git push main.py"
      }
    ],
    "answer": "ค",
    "explanation": "git add <file> ใช้เพิ่มไฟล์เข้า Staging Area"
  },
  {
    "id": 85,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่งในการบันทึกการเปลี่ยนแปลงพร้อมข้อความอธิบายคือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "git commit -m \"Commit message\""
      },
      {
        "key": "ข",
        "text": "git save -m \"Commit message\""
      },
      {
        "key": "ค",
        "text": "git add -m \"Commit message\""
      },
      {
        "key": "ง",
        "text": "git log -m \"Commit message\""
      }
    ],
    "answer": "ก",
    "explanation": "git commit -m 'msg' ใช้บันทึกเปลี่ยนแปลง"
  },
  {
    "id": 86,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่งใดใช้สำหรับตรวจสอบสถานะของไฟล์ใน Working Directory และ Staging Area?",
    "options": [
      {
        "key": "ก",
        "text": "git log"
      },
      {
        "key": "ข",
        "text": "git status"
      },
      {
        "key": "ค",
        "text": "git show"
      },
      {
        "key": "ง",
        "text": "git check"
      }
    ],
    "answer": "ข",
    "explanation": "git status ใช้เช็กสถานะไฟล์"
  },
  {
    "id": 87,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "หากต้องการดูประวัติการ Commit ทั้งหมดแบบย่อในบรรทัดเดียว ต้องใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "git log --short"
      },
      {
        "key": "ข",
        "text": "git log --oneline"
      },
      {
        "key": "ค",
        "text": "git log --summary"
      },
      {
        "key": "ง",
        "text": "git log --brief"
      }
    ],
    "answer": "ข",
    "explanation": "git log --oneline แสดงประวัติแบบบรรทัดเดียว"
  },
  {
    "id": 88,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ในข้อความ Commit (Commit Message) คำว่า feat: มักใช้แจ้งการเปลี่ยนแปลงแบบใด?",
    "options": [
      {
        "key": "ก",
        "text": "แก้ไขบั๊ก (Bug Fix)"
      },
      {
        "key": "ข",
        "text": "เพิ่มฟังก์ชันการทำงานใหม่ (Feature)"
      },
      {
        "key": "ค",
        "text": "ปรับปรุงเอกสาร (Documentation)"
      },
      {
        "key": "ง",
        "text": "ปรับปรุงประสิทธิภาพ (Performance)"
      }
    ],
    "answer": "ข",
    "explanation": "feat: หมายถึงการเพิ่มฟีเจอร์ใหม่"
  },
  {
    "id": 89,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ในข้อความ Commit คำว่า fix: มีไว้สำหรับสิ่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "แก้ไขข้อผิดพลาดหรือบั๊กในระบบ"
      },
      {
        "key": "ข",
        "text": "การปรับโครงสร้างโค้ด"
      },
      {
        "key": "ค",
        "text": "การเพิ่มโมดูลใหม่"
      },
      {
        "key": "ง",
        "text": "การอัปเดตระบบ CI/CD"
      }
    ],
    "answer": "ก",
    "explanation": "fix: หมายถึงการแก้ไขบั๊ก"
  },
  {
    "id": 90,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ไฟล์ .gitignore มีหน้าที่อะไรในโปรเจกต์ Git?",
    "options": [
      {
        "key": "ก",
        "text": "ระบุไฟล์หรือโฟลเดอร์ที่ไม่ต้องการให้ Git ติดตามการเปลี่ยนแปลง"
      },
      {
        "key": "ข",
        "text": "ลบไฟล์ออกจากฮาร์ดดิสก์อัตโนมัติ"
      },
      {
        "key": "ค",
        "text": "ละเว้นการตรวจจับไวรัส"
      },
      {
        "key": "ง",
        "text": "ป้องกันไม่ให้ผู้อื่นแก้ไข Repository"
      }
    ],
    "answer": "ก",
    "explanation": ".gitignore ใช้ระบุไฟล์ที่ไม่ต้องการให้ Git ติดตาม"
  },
  {
    "id": 91,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ประโยชน์หลักของระบบ Version Control System (VCS) คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "ช่วยย้อนกลับไปดูหรือแก้ไขโค้ดเวอร์ชันเก่าได้เสมอ"
      },
      {
        "key": "ข",
        "text": "ช่วยเร่งความเร็วในการรันโปรแกรม"
      },
      {
        "key": "ค",
        "text": "ช่วยกำจัดบั๊กในโค้ดให้อัตโนมัติ"
      },
      {
        "key": "ง",
        "text": "ช่วยแปลภาษา Python เป็น C++"
      }
    ],
    "answer": "ก",
    "explanation": "VCS ช่วยบันทึกประวัติและย้อนกลับเวอร์ชันเก่าได้"
  },
  {
    "id": 92,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่ง git add . (มีจุด) มีความหมายอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "เพิ่มเฉพาะไฟล์ดอทไฟล์ (.env)"
      },
      {
        "key": "ข",
        "text": "เพิ่มไฟล์การเปลี่ยนแปลงทั้งหมดในโฟลเดอร์ปัจจุบันเข้า Staging Area"
      },
      {
        "key": "ค",
        "text": "ลบไฟล์ทั้งหมดใน Staging Area"
      },
      {
        "key": "ง",
        "text": "เลิกติดตามไฟล์ทั้งหมด"
      }
    ],
    "answer": "ข",
    "explanation": "git add . ย้ายไฟล์ทั้งหมดในโฟลเดอร์ปัจจุบันไป Staging"
  },
  {
    "id": 93,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ส่วนประกอบใดของ git log ที่ใช้เป็นรหัสระบุตัวตนของการ Commit แต่ละครั้ง?",
    "options": [
      {
        "key": "ก",
        "text": "Author"
      },
      {
        "key": "ข",
        "text": "Commit Hash"
      },
      {
        "key": "ค",
        "text": "Date"
      },
      {
        "key": "ง",
        "text": "Branch Name"
      }
    ],
    "answer": "ข",
    "explanation": "Commit Hash คือรหัสระบุ Commit แต่ละครั้ง"
  },
  {
    "id": 94,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำว่า docs: ใน Commit Message มีไว้สำหรับการเปลี่ยนแปลงประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "แก้ไขโค้ดระบบหลัก"
      },
      {
        "key": "ข",
        "text": "ปรับปรุงเอกสารประกอบ เช่น README.md"
      },
      {
        "key": "ค",
        "text": "เพิ่มไฟล์ภาพประกอบ"
      },
      {
        "key": "ง",
        "text": "ปรับปรุงระบบฐานข้อมูล"
      }
    ],
    "answer": "ข",
    "explanation": "docs: ใช้สำหรับการแก้ไขหรือเพิ่มเอกสาร"
  },
  {
    "id": 95,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำว่า refactor: ใน Commit Message หมายถึงการกระทำใด?",
    "options": [
      {
        "key": "ก",
        "text": "เพิ่มฟังก์ชันใหม่"
      },
      {
        "key": "ข",
        "text": "ปรับปรุงโครงสร้างโค้ดให้น่าอ่าน/ดีขึ้น โดยไม่เปลี่ยนพฤติกรรมการทำงานของโปรแกรม"
      },
      {
        "key": "ค",
        "text": "แก้บั๊กฉุกเฉินบน Production"
      },
      {
        "key": "ง",
        "text": "อัปเดตแพ็กเกจไลบรารี"
      }
    ],
    "answer": "ข",
    "explanation": "refactor: คือปรับโครงสร้างโค้ดโดยไม่เปลี่ยนผลลัพธ์การทำงาน"
  },
  {
    "id": 96,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ลำดับขั้นตอนการทำงานพื้นฐานกับ Git ข้อใดถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Commit -> Add -> Modify file"
      },
      {
        "key": "ข",
        "text": "Modify file -> Staging Area (git add) -> Repository (git commit)"
      },
      {
        "key": "ค",
        "text": "Push -> Commit -> Add"
      },
      {
        "key": "ง",
        "text": "Commit -> Staging Area -> Working Directory"
      }
    ],
    "answer": "ข",
    "explanation": "Modify -> Staging Area (git add) -> Repository (git commit)"
  },
  {
    "id": 97,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "หากต้องการแก้ไขการกำหนดค่าชื่อผู้ใช้ Git ทั่วทั้งเครื่อง ต้องใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "git config --global user.name \"Your Name\""
      },
      {
        "key": "ข",
        "text": "git set user.name \"Your Name\""
      },
      {
        "key": "ค",
        "text": "git init user.name \"Your Name\""
      },
      {
        "key": "ง",
        "text": "git user \"Your Name\""
      }
    ],
    "answer": "ก",
    "explanation": "git config --global user.name ตั้งค่าชื่อผู้ใช้งาน"
  },
  {
    "id": 98,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ใน Centralized VCS (CVCS) หากเซิร์ฟเวอร์กลางล่ม จะเกิดผลกระทบอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ทำงานต่อได้ปกติไม่มีปัญหา"
      },
      {
        "key": "ข",
        "text": "ผู้พัฒนาจะไม่สามารถบันทึกประวัติหรือทำงานร่วมกันได้"
      },
      {
        "key": "ค",
        "text": "โค้ดในเครื่องของผู้พัฒนาจะหายทั้งหมด"
      },
      {
        "key": "ง",
        "text": "Git จะแปลงเป็น DVCS อัตโนมัติ"
      }
    ],
    "answer": "ข",
    "explanation": "เซิร์ฟเวอร์กลางล่มใน CVCS ทำให้ทำงานร่วมกันไม่ได้"
  },
  {
    "id": 99,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำว่า chore: ใน Commit Message เหมาะสำหรับงานประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "เพิ่มฟีเจอร์ใหญ่"
      },
      {
        "key": "ข",
        "text": "งานจิปาถะ เช่น การอัปเดต Config, Build Script หรือ Dependency"
      },
      {
        "key": "ค",
        "text": "การแก้บั๊กหน้าเว็บ"
      },
      {
        "key": "ง",
        "text": "การทดสอบ Test Case"
      }
    ],
    "answer": "ข",
    "explanation": "chore: ใช้กับงานจิปาถะอื่นๆ เช่น Config, Dependency"
  },
  {
    "id": 100,
    "category": "หมวดที่ 5: Git พื้นฐาน (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "โฟลเดอร์ซ่อนใดที่ Git สร้างขึ้นเพื่อเก็บประวัติและข้อมูลคอนฟิกทั้งหมดของ Repository?",
    "options": [
      {
        "key": "ก",
        "text": ".vcs/"
      },
      {
        "key": "ข",
        "text": ".git/"
      },
      {
        "key": "ค",
        "text": ".repository/"
      },
      {
        "key": "ง",
        "text": ".github/"
      }
    ],
    "answer": "ข",
    "explanation": "โฟลเดอร์ .git/ เก็บประวัติและคอนฟิกทั้งหมดของ Git"
  },
  {
    "id": 101,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้เชื่อมต่อ Local Repository กับ Remote Repository บน GitHub?",
    "options": [
      {
        "key": "ก",
        "text": "git remote add origin <URL>"
      },
      {
        "key": "ข",
        "text": "git connect <URL>"
      },
      {
        "key": "ค",
        "text": "git link origin <URL>"
      },
      {
        "key": "ง",
        "text": "git push origin <URL>"
      }
    ],
    "answer": "ก",
    "explanation": "git remote add origin <URL> ใช้เชื่อมต่อ Remote Repo"
  },
  {
    "id": 102,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้อัปโหลด Commit จากเครื่องตนเองไปยัง Remote Repository?",
    "options": [
      {
        "key": "ก",
        "text": "git pull"
      },
      {
        "key": "ข",
        "text": "git push"
      },
      {
        "key": "ค",
        "text": "git clone"
      },
      {
        "key": "ง",
        "text": "git fetch"
      }
    ],
    "answer": "ข",
    "explanation": "git push ส่ง Commit ขึ้นไปบน Remote"
  },
  {
    "id": 103,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้ดึงประวัติและไฟล์ล่าสุดจาก Remote Repository มาปรับปรุงในเครื่องตนเอง?",
    "options": [
      {
        "key": "ก",
        "text": "git push"
      },
      {
        "key": "ข",
        "text": "git pull"
      },
      {
        "key": "ค",
        "text": "git commit"
      },
      {
        "key": "ง",
        "text": "git branch"
      }
    ],
    "answer": "ข",
    "explanation": "git pull ดึงโค้ดล่าสุดจาก Remote ลงเครื่อง"
  },
  {
    "id": 104,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "หากต้องการคัดลอกโปรเจกต์จาก Remote Repository ลงมาที่เครื่องเป็นครั้งแรก ต้องใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "git copy <URL>"
      },
      {
        "key": "ข",
        "text": "git clone <URL>"
      },
      {
        "key": "ค",
        "text": "git download <URL>"
      },
      {
        "key": "ง",
        "text": "git get <URL>"
      }
    ],
    "answer": "ข",
    "explanation": "git clone คัดลอกโปรเจกต์ลงมาเป็นครั้งแรก"
  },
  {
    "id": 105,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "\"Branch\" ในระบบ Git มีประโยชน์อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ช่วยเร่งความเร็วในการดาวน์โหลดโค้ด"
      },
      {
        "key": "ข",
        "text": "แยกเส้นทางการพัฒนาเพื่อทดลองหรือสร้างฟีเจอร์ใหม่โดยไม่กระทบโค้ดหลัก"
      },
      {
        "key": "ค",
        "text": "บีบอัดขนาดไฟล์ใน Repository"
      },
      {
        "key": "ง",
        "text": "ใช้สำหรับสำรองข้อมูลไปยังคลาวด์อื่น"
      }
    ],
    "answer": "ข",
    "explanation": "Branch ช่วยแยกสายพัฒนาโค้ดไม่ให้กระทบสายหลัก"
  },
  {
    "id": 106,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้สร้าง Branch ใหม่ชื่อ feature-login?",
    "options": [
      {
        "key": "ก",
        "text": "git make branch feature-login"
      },
      {
        "key": "ข",
        "text": "git branch feature-login"
      },
      {
        "key": "ค",
        "text": "git new branch feature-login"
      },
      {
        "key": "ง",
        "text": "git checkout -b feature-login"
      }
    ],
    "answer": "ข",
    "explanation": "git branch <name> ใช้สร้าง Branch ใหม่"
  },
  {
    "id": 107,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้สำหรับสลับไปทำงานยัง Branch ที่ชื่อ feature-login?",
    "options": [
      {
        "key": "ก",
        "text": "git switch feature-login"
      },
      {
        "key": "ข",
        "text": "git checkout feature-login"
      },
      {
        "key": "ค",
        "text": "ถูกทั้ง ก. และ ข."
      },
      {
        "key": "ง",
        "text": "ไม่มีข้อใดถูก"
      }
    ],
    "answer": "ค",
    "explanation": "สลับ Branch ได้ทั้ง git checkout และ git switch"
  },
  {
    "id": 108,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่งใดใช้รวมโค้ดจาก Branch อื่นเข้ามายัง Branch ปัจจุบัน?",
    "options": [
      {
        "key": "ก",
        "text": "git combine <branch-name>"
      },
      {
        "key": "ข",
        "text": "git merge <branch-name>"
      },
      {
        "key": "ค",
        "text": "git join <branch-name>"
      },
      {
        "key": "ง",
        "text": "git connect <branch-name>"
      }
    ],
    "answer": "ข",
    "explanation": "git merge <name> รวมโค้ดจาก Branch อื่น"
  },
  {
    "id": 109,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "Merge Conflict เกิดขึ้นจากสาเหตุใด?",
    "options": [
      {
        "key": "ก",
        "text": "การเชื่อมต่ออินเทอร์เน็ตขาดหายขณะ Push"
      },
      {
        "key": "ข",
        "text": "มีการแก้ไขโค้ดในบรรทัดเดียวกันของไฟล์เดียวกันจาก 2 Branch ที่ต่างกัน แล้วนำมารวมกัน"
      },
      {
        "key": "ค",
        "text": "ลืมใส่ข้อความใน git commit"
      },
      {
        "key": "ง",
        "text": "ใช้เวอร์ชันของ Git ที่เก่าเกินไป"
      }
    ],
    "answer": "ข",
    "explanation": "Merge Conflict เกิดจากการแก้โค้ดบรรทัดเดียวกันจากต่าง Branch"
  },
  {
    "id": 110,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "เมื่อเกิด Merge Conflict ขึ้น โปรแกรมเมอร์ต้องทำอย่างไรเป็นอันดับแรก?",
    "options": [
      {
        "key": "ก",
        "text": "ลบโปรเจกต์ทิ้งแล้ว Clone ใหม่"
      },
      {
        "key": "ข",
        "text": "เปิดไฟล์ที่มีข้อขัดแย้ง เลือกแก้ไขโค้ดให้ถูกต้องด้วยตนเอง แล้วทำการ Commit ใหม่"
      },
      {
        "key": "ค",
        "text": "ปิดเครื่องคอมพิวเตอร์ทันที"
      },
      {
        "key": "ง",
        "text": "สั่ง git push --force ทันที"
      }
    ],
    "answer": "ข",
    "explanation": "ต้องเปิดไฟล์ที่มี Conflict แล้วแก้โค้ดด้วยตนเองก่อน Commit"
  },
  {
    "id": 111,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "แพลตฟอร์มใด ไม่ใช่ บริการ Remote Repository ยอดนิยมสำหรับ Git?",
    "options": [
      {
        "key": "ก",
        "text": "GitHub"
      },
      {
        "key": "ข",
        "text": "GitLab"
      },
      {
        "key": "ค",
        "text": "Bitbucket"
      },
      {
        "key": "ง",
        "text": "Google Drive"
      }
    ],
    "answer": "ง",
    "explanation": "Google Drive ไม่ใช่ Remote Repository สำหรับระบบ Git"
  },
  {
    "id": 112,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ในการทำงานกับ Vi/Vim Editor เมื่อต้องการเข้าสู่โหมดพิมพ์ข้อความ (Insert Mode) ต้องกดปุ่มใด?",
    "options": [
      {
        "key": "ก",
        "text": "ปุ่ม Esc"
      },
      {
        "key": "ข",
        "text": "ปุ่ม i"
      },
      {
        "key": "ค",
        "text": "ปุ่ม :wq"
      },
      {
        "key": "ง",
        "text": "ปุ่ม Enter"
      }
    ],
    "answer": "ข",
    "explanation": "กด i ใน Vi/Vim เพื่อเข้าสู่ Insert Mode"
  },
  {
    "id": 113,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ใน Vi/Vim Editor เมื่อพิมพ์แก้ไขงานเสร็จแล้ว ต้องการบันทึกและออกจากโปรแกรม ต้องกดปุ่มตามข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "กด Esc แล้วพิมพ์ :wq ตามด้วย Enter"
      },
      {
        "key": "ข",
        "text": "กด Ctrl + S แล้วปิดหน้าต่าง"
      },
      {
        "key": "ค",
        "text": "กด i แล้วพิมพ์ exit"
      },
      {
        "key": "ง",
        "text": "กด :q!"
      }
    ],
    "answer": "ก",
    "explanation": "กด Esc แล้วพิมพ์ :wq (write & quit) เพื่อบันทึกแล้วออก"
  },
  {
    "id": 114,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "หากต้องการลบ Branch ชื่อ feature-old ที่ไม่ใช้แล้วใน Local สามารถใช้คำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "git branch -d feature-old"
      },
      {
        "key": "ข",
        "text": "git remove branch feature-old"
      },
      {
        "key": "ค",
        "text": "git delete feature-old"
      },
      {
        "key": "ง",
        "text": "git drop branch feature-old"
      }
    ],
    "answer": "ก",
    "explanation": "git branch -d <name> ใช้ลบ Branch"
  },
  {
    "id": 115,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "สัญลักษณ์ใดในไฟล์โค้ดที่ Git แทรกเข้ามาเพื่อแสดงจุดที่เป็น Merge Conflict?",
    "options": [
      {
        "key": "ก",
        "text": "<<<<<<<, =======, >>>>>>>"
      },
      {
        "key": "ข",
        "text": "*******, #######"
      },
      {
        "key": "ค",
        "text": "[CONFLICT START], [CONFLICT END]"
      },
      {
        "key": "ง",
        "text": "<BEGIN>, <END>"
      }
    ],
    "answer": "ก",
    "explanation": "Git ใช้สัญลักษณ์ <<<<<<<, =======, >>>>>>> แสดงตำแหน่ง Conflict"
  },
  {
    "id": 116,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่ง git checkout -b <branch-name> มีผลลัพธ์เท่ากับคำสั่งใดรวมกัน?",
    "options": [
      {
        "key": "ก",
        "text": "git branch + git merge"
      },
      {
        "key": "ข",
        "text": "git branch + git checkout"
      },
      {
        "key": "ค",
        "text": "git init + git add"
      },
      {
        "key": "ง",
        "text": "git pull + git push"
      }
    ],
    "answer": "ข",
    "explanation": "git checkout -b คือการสร้าง Branch และสลับไป Branch นั้นทันที"
  },
  {
    "id": 117,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ชื่อสายพัฒนาหลัก (Default Branch) ใน Git Repository ยุคปัจจุบัน มักใช้ชื่อว่าอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "master หรือ main"
      },
      {
        "key": "ข",
        "text": "home"
      },
      {
        "key": "ค",
        "text": "root"
      },
      {
        "key": "ง",
        "text": "first"
      }
    ],
    "answer": "ก",
    "explanation": "สายพัฒนาหลักนิยมใช้ชื่อ main หรือ master"
  },
  {
    "id": 118,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่ง git remote -v มีไว้สำหรับทำสิ่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "ลบ Remote ที่ไม่ใช้ออก"
      },
      {
        "key": "ข",
        "text": "ตรวจสอบรายชื่อและ URL ของ Remote Repository ที่เชื่อมต่ออยู่"
      },
      {
        "key": "ค",
        "text": "สลับไปใช้ Remote ตัวอื่น"
      },
      {
        "key": "ง",
        "text": "อัปเดตเวอร์ชันของ Git Remote"
      }
    ],
    "answer": "ข",
    "explanation": "git remote -v แสดงรายชื่อ Remote พร้อม URL"
  },
  {
    "id": 119,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "เมื่อเราทำการ git clone <URL> สิ่งใดจะเกิดขึ้น?",
    "options": [
      {
        "key": "ก",
        "text": "ดาวน์โหลดโค้ดเวอร์ชันล่าสุดอย่างเดียวโดยไม่มีประวัติ Git"
      },
      {
        "key": "ข",
        "text": "คัดลอกโปรเจกต์พร้อมประวัติ Commit ทั้งหมดลงมาที่เครื่อง และสร้าง Local Repository ให้อัตโนมัติ"
      },
      {
        "key": "ค",
        "text": "สร้าง Remote Repository ใหม่บน GitHub"
      },
      {
        "key": "ง",
        "text": "ทำการ Merge โค้ดทั้งหมดเข้า Main อัตโนมัติ"
      }
    ],
    "answer": "ข",
    "explanation": "git clone คัดลอก Repository ทั้งหมดพร้อมประวัติ Commit ลงมา"
  },
  {
    "id": 120,
    "category": "หมวดที่ 6: Git Branching & Remote (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ในการทำงานร่วมกันเป็นทีม ก่อนที่จะเริ่มเขียนโค้ดงานใหม่ทุกครั้ง ควรปฏิบัติตามข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "สั่ง git push ทันที"
      },
      {
        "key": "ข",
        "text": "สั่ง git pull เพื่อดึงโค้ดล่าสุดจาก Remote มาอัปเดตเครื่องตนเองก่อน"
      },
      {
        "key": "ค",
        "text": "สร้าง Repository ใหม่ทันที"
      },
      {
        "key": "ง",
        "text": "ลบ Branch main ทิ้งก่อน"
      }
    ],
    "answer": "ข",
    "explanation": "ควร git pull ดึงโค้ดล่าสุดก่อนเริ่มงานเสมอเพื่อป้องกัน Conflict"
  }
],
  "advanced": [
  {
    "id": 1,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดอธิบายความแตกต่างระหว่าง Compiler และ Interpreter ในแง่ของการจัดการ Memory และ Execution Performance ได้ถูกต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "Compiler ใช้หน่วยความจำน้อยกว่าระหว่าง Execution เพราะไม่ต้องเก็บ Source Code ไว้"
      },
      {
        "key": "ข",
        "text": "Interpreter แปลง Source Code ทั้งหมดเป็น Intermediate Code ก่อนเสมอ ทำให้ประมวลผลรอบถัดไปเร็วขึ้น"
      },
      {
        "key": "ค",
        "text": "Compiler สร้าง Executable File (Machine Code) ทำให้ประมวลผลเร็วกว่า แต่ใช้ Memory สูงกว่าในขั้นตอน Compilation"
      },
      {
        "key": "ง",
        "text": "Interpreter และ Compiler ใช้โครงสร้างการจัดการ Memory ไม่ต่างกัน"
      }
    ],
    "answer": "ค",
    "explanation": "Compiler แปลงทรานสเลททั้งโปรแกรมเป็น Executable File จึงประมวลผลเร็วกว่า แต่ขั้นตอน Compile ใช้ทรัพยากรสูง"
  },
  {
    "id": 2,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ในขั้นตอน System Development Life Cycle (SDLC) ขั้นตอนใดที่หากเกิดความผิดพลาดจะส่งผลกระทบต่อต้นทุนโครงการมากที่สุด (Cost of Change)?",
    "options": [
      {
        "key": "ก",
        "text": "Coding / Implementation"
      },
      {
        "key": "ข",
        "text": "Requirement Analysis & System Design"
      },
      {
        "key": "ค",
        "text": "Testing & Integration"
      },
      {
        "key": "ง",
        "text": "Maintenance"
      }
    ],
    "answer": "ข",
    "explanation": "ความผิดพลาดในขั้นตอนวิเคราะห์/ออกแบบ (Requirement/Design) ส่งผลเสียเป็นลูกคลื่น แก้ไขยากและสิ้นเปลืองงบที่สุด"
  },
  {
    "id": 3,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การประมวลผลแบบ \"Pass-by-Value\" และ \"Pass-by-Reference\" มีผลต่อ Memory Stack และ Heap อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "Pass-by-Value จะคัดลอกข้อมูลลงใน Stack Frame ใหม่ ส่วน Pass-by-Reference ส่งผ่าน Address ของ Memory"
      },
      {
        "key": "ข",
        "text": "Pass-by-Value ใช้ Heap เท่านั้น ส่วน Pass-by-Reference ใช้ Stack เท่านั้น"
      },
      {
        "key": "ค",
        "text": "ทั้งสองแบบสร้าง Copy ของข้อมูลบน Heap เสมอ"
      },
      {
        "key": "ง",
        "text": "Pass-by-Reference ป้องกันไม่ให้ฟังก์ชันแก้ไขค่าเดิมใน Memory"
      }
    ],
    "answer": "ก",
    "explanation": "Pass-by-Value ทำการ Copy ค่าใหม่ลง Stack Frame; Pass-by-Reference ส่ง Address ไป"
  },
  {
    "id": 4,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดคือข้อเสียหลักของภาษาโปรแกรมระดับต่ำ (Low-level Language) เมื่อเปรียบเทียบกับภาษาระดับสูง?",
    "options": [
      {
        "key": "ก",
        "text": "ทำงานได้ช้ากว่าเนื่องจากไม่มี Compiler ช่วย Optimize"
      },
      {
        "key": "ข",
        "text": "ขาด Machine Portability (ขึ้นกับสถาปัตยกรรมของ Hardware)"
      },
      {
        "key": "ค",
        "text": "ไม่สามารถเข้าถึงตำแหน่ง Memory (Pointers) ได้โดยตรง"
      },
      {
        "key": "ง",
        "text": "มี Overhead ของ Memory Management สูงมาก"
      }
    ],
    "answer": "ข",
    "explanation": "Low-level (Assembly/Machine Code) ผูกติดกับ Hardware Architecture ทำให้ย้ายระบบได้ยาก (Not Portable)"
  },
  {
    "id": 5,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดอธิบายแนวคิดเรื่อง Linker ในกระบวนการ Compilation ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "แปลง High-level Code เป็น Assembly Code"
      },
      {
        "key": "ข",
        "text": "รวม Object Files หลายๆ ไฟล์เข้ากับ Library Files เพื่อสร้าง Executable File"
      },
      {
        "key": "ค",
        "text": "โหลด Executable File ลงสู่ RAM เพื่อเตรียมประมวลผล"
      },
      {
        "key": "ง",
        "text": "ตรวจสอบความถูกต้องทางไวยากรณ์ (Syntax Analysis) ของโค้ด"
      }
    ],
    "answer": "ข",
    "explanation": "Linker มีหน้าที่นำ Object files และ Libraries มารวมกันสร้างเป็น .exe"
  },
  {
    "id": 6,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "กระบวนการใดใน Compiler ที่ทำหน้าที่จัดกลุ่ม Character ให้เป็น Tokens?",
    "options": [
      {
        "key": "ก",
        "text": "Lexical Analysis (Scanning)"
      },
      {
        "key": "ข",
        "text": "Syntax Analysis (Parsing)"
      },
      {
        "key": "ค",
        "text": "Semantic Analysis"
      },
      {
        "key": "ง",
        "text": "Code Optimization"
      }
    ],
    "answer": "ก",
    "explanation": "Lexical Analysis (Scanner) แปลงสายตัวอักษรเป็น Tokens"
  },
  {
    "id": 7,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "Semantic Error ต่างจาก Syntax Error อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "Semantic Error เกิดขณะ Compile ส่วน Syntax Error เกิดขณะ Run"
      },
      {
        "key": "ข",
        "text": "Syntax Error ผิดไวยากรณ์ภาษา ส่วน Semantic Error ผิดความหมาย/ตรรกะของการทำงาน"
      },
      {
        "key": "ค",
        "text": "Syntax Error ทำให้โปรแกรม Crash ส่วน Semantic Error ทำให้ Compile ไม่ผ่าน"
      },
      {
        "key": "ง",
        "text": "ทั้งสองแบบมีความหมายเหมือนกัน"
      }
    ],
    "answer": "ข",
    "explanation": "Syntax Error คือผิดกฎไวยากรณ์; Semantic Error คือไวยากรณ์ถูกแต่ความหมาย/ผลลัพธ์ผิด"
  },
  {
    "id": 8,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "แนวคิดเรื่อง High Cohesion และ Low Coupling ในการออกแบบโปรแกรมหมายถึงอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Module ควรมีความเกี่ยวข้องกันเองสูง และลดการพึ่งพา Module อื่น"
      },
      {
        "key": "ข",
        "text": "Module ควรอ้างอิง Module อื่นให้มากที่สุด และลดฟังก์ชันภายใน"
      },
      {
        "key": "ค",
        "text": "โค้ดควรเขียนจบในไฟล์เดียว และใช้ตัวแปร Global เป็นหลัก"
      },
      {
        "key": "ง",
        "text": "เพิ่มความยืดหยุ่นโดยให้ทุก Module เรียกใช้ Memory ชุดเดียวกัน"
      }
    ],
    "answer": "ก",
    "explanation": "หลักการ Modular Design: High Cohesion (ทำหน้าที่เดี่ยวๆ ได้ดี) และ Low Coupling (ขึ้นตรงกับโมดูลอื่นให้น้อยที่สุด)"
  },
  {
    "id": 9,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดเป็นตัวอย่างของ Static Memory Allocation?",
    "options": [
      {
        "key": "ก",
        "text": "การจองอาร์เรย์ด้วยคำสั่ง malloc() หรือ new"
      },
      {
        "key": "ข",
        "text": "การประกาศตัวแปรอาร์เรย์ขนาดคงที่ เช่น int arr[100];"
      },
      {
        "key": "ค",
        "text": "การเพิ่มข้อมูลใน Linked List"
      },
      {
        "key": "ง",
        "text": "การใช้ Dynamic Vector"
      }
    ],
    "answer": "ข",
    "explanation": "การประกาศอาร์เรย์ระบุขนาดคงที่ เกิดขึ้นตอน Compile Time (Static)"
  },
  {
    "id": 10,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การเกิด Stack Overflow มักมีสาเหตุหลักมาจากข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "การจอง Memory ใน Heap มากเกินไป"
      },
      {
        "key": "ข",
        "text": "การทำ Infinite Recursion หรือการเรียกใช้ Local Variables ใน Stack มากเกินขีดจำกัด"
      },
      {
        "key": "ค",
        "text": "การลืม Deallocate Memory ใน C/C++"
      },
      {
        "key": "ง",
        "text": "การอ่านไฟล์ขนาดใหญ่เกินขนาด RAM"
      }
    ],
    "answer": "ข",
    "explanation": "Stack Overflow เกิดเมื่อใช้ Stack Memory เกินขีดจำกัด เช่น Infinite Recursion"
  },
  {
    "id": 11,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "โครงสร้างโปรแกรมแบบ Structured Programming มุ่งเน้นการหลีกเลี่ยงคำสั่งใด?",
    "options": [
      {
        "key": "ก",
        "text": "for loop"
      },
      {
        "key": "ข",
        "text": "switch-case"
      },
      {
        "key": "ค",
        "text": "goto"
      },
      {
        "key": "ง",
        "text": "return"
      }
    ],
    "answer": "ค",
    "explanation": "Structured Programming เน้น Sequence, Selection, Iteration และหลีกเลี่ยง goto"
  },
  {
    "id": 12,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดคือหน้าที่ของ Loader ในระบบปฏิบัติการ?",
    "options": [
      {
        "key": "ก",
        "text": "แปลงสัญลักษณ์ Assembly เป็น Machine Code"
      },
      {
        "key": "ข",
        "text": "นำ Executable Program จาก Disk ขึ้นสู่ Main Memory (RAM) และเตรียมการประมวลผล"
      },
      {
        "key": "ค",
        "text": "แปลงภาพ Flowchart เป็นซอร์สโค้ด"
      },
      {
        "key": "ง",
        "text": "จัดการการเข้าถึงข้อมูลใน Database"
      }
    ],
    "answer": "ข",
    "explanation": "Loader มีหน้าที่โหลด Executable Code จาก Disk ลงสู่ RAM เพื่อเตรียม Executed"
  },
  {
    "id": 13,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "การทำงานของ Garbage Collection ในภาษาอย่าง Java หรือ Python ช่วยแก้ปัญหาใดเป็นหลัก?",
    "options": [
      {
        "key": "ก",
        "text": "Syntax Error"
      },
      {
        "key": "ข",
        "text": "Memory Leak"
      },
      {
        "key": "ค",
        "text": "Deadlock"
      },
      {
        "key": "ง",
        "text": "Stack Overflow"
      }
    ],
    "answer": "ข",
    "explanation": "Garbage Collection ช่วย คืนพื้นที่ Memory ที่ไม่ได้ใช้งานแล้วโดยอัตโนมัติ ป้องกัน Memory Leak"
  },
  {
    "id": 14,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ในการคำนวณประสิทธิภาพอัลกอริทึม Big-O Notation ตัวใดแสดงถึงความซับซ้อนที่แย่ที่สุด (Worst Efficiency)?",
    "options": [
      {
        "key": "ก",
        "text": "O(1)"
      },
      {
        "key": "ข",
        "text": "O(n log n)"
      },
      {
        "key": "ค",
        "text": "O(n^2)"
      },
      {
        "key": "ง",
        "text": "O(2^n)"
      }
    ],
    "answer": "ง",
    "explanation": "O(2^n) เป็น Exponential time มีความซับซ้อนและประสิทธิภาพแย่ที่สุดในตัวเลือก"
  },
  {
    "id": 15,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดไม่ใช่ขั้นตอนมาตรฐานในพัฒนาซอฟต์แวร์แบบ Waterfall Model?",
    "options": [
      {
        "key": "ก",
        "text": "Feasibility Study"
      },
      {
        "key": "ข",
        "text": "Requirement Analysis"
      },
      {
        "key": "ค",
        "text": "Sprint Planning"
      },
      {
        "key": "ง",
        "text": "Integration & Testing"
      }
    ],
    "answer": "ค",
    "explanation": "Sprint Planning เป็นขั้นตอนของ Agile/Scrum ไม่ใช่ Waterfall Model"
  },
  {
    "id": 16,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดคือคำอธิบายของ \"Paradigm\" การเขียนโปรแกรมแบบ Functional Programming?",
    "options": [
      {
        "key": "ก",
        "text": "มุ่งเน้นการเปลี่ยนแปลง State ของวัตถุ (Objects)"
      },
      {
        "key": "ข",
        "text": "มองการคำนวณเป็นการประมวลผลฟังก์ชันทางคณิตศาสตร์และหลีกเลี่ยง Mutable Data"
      },
      {
        "key": "ค",
        "text": "เขียนคำสั่งควบคุมตามลำดับ บรรทัดต่อบรรทัด"
      },
      {
        "key": "ง",
        "text": "ขับเคลื่อนการทำงานผ่าน Event เช่น การคลิกเมาส์"
      }
    ],
    "answer": "ข",
    "explanation": "Functional Programming มองการประมวลผลเป็น Pure Functions และหลีกเลี่ยงการเปลี่ยน State"
  },
  {
    "id": 17,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ในการแก้ไข Bug ประเภท Logic Error วิธีใดมีประสิทธิภาพสูงสุดในการหาจุดผิดพลาด?",
    "options": [
      {
        "key": "ก",
        "text": "Re-compiling Code"
      },
      {
        "key": "ข",
        "text": "Code Dry-Run (Trace Table) และการใช้ Debugger (Breakpoints)"
      },
      {
        "key": "ค",
        "text": "เปลี่ยนไปใช้ Compiler ตัวอื่น"
      },
      {
        "key": "ง",
        "text": "เพิ่มขนาด Memory ของระบบ"
      }
    ],
    "answer": "ข",
    "explanation": "การทำ Trace Table และการสร้าง Breakpoint บน Debugger ช่วยหา Logic Error ได้ตรงจุดที่สุด"
  },
  {
    "id": 18,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ไฟล์นามสกุล .obj หรือ .o จัดอยู่ในประเภทใดในกระบวนการเขียนโปรแกรม?",
    "options": [
      {
        "key": "ก",
        "text": "Source Code File"
      },
      {
        "key": "ข",
        "text": "Object File (Machine Code ที่ยังไม่ได้ Link)"
      },
      {
        "key": "ค",
        "text": "Executable File"
      },
      {
        "key": "ง",
        "text": "Header File"
      }
    ],
    "answer": "ข",
    "explanation": "ไฟล์ .obj คือ Machine code จากการ Compile ซอร์สโค้ด แต่ยังไม่ได้ผ่านการ Link"
  },
  {
    "id": 19,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "ข้อใดอธิบายขอบเขตของตัวแปรประเภท \"Global Variable\" ได้ถูกต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "สามารถเข้าถึงได้เฉพาะภายในฟังก์ชันที่ประกาศไว้เท่านั้น"
      },
      {
        "key": "ข",
        "text": "อยู่ใน Memory สั้นๆ และถูกทำลายเมื่อจบ Block {}"
      },
      {
        "key": "ค",
        "text": "สามารถเข้าถึงและแก้ไขได้จากทุกส่วนของโปรแกรม และคงอยู่ตลอดอายุการทำงานของโปรแกรม"
      },
      {
        "key": "ง",
        "text": "ถูกจัดเก็บใน CPU Register เสมอ"
      }
    ],
    "answer": "ค",
    "explanation": "Global Variable มีอายุคงอยู่ตลอดระยะเวลาการทำงานของโปรแกรม และเข้าถึงได้จากทุกส่วน"
  },
  {
    "id": 20,
    "category": "Session 01: Programming Concepts, SDLC & Compilers (ข้อ 1-20)",
    "categoryKey": "cat1",
    "question": "คำว่า \"Portability\" ในซอฟต์แวร์หมายถึงอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "ความสามารถในการรันซอฟต์แวร์บนระบบปฏิบัติการ/สถาปัตยกรรมที่หลากหลายโดยดัดแปลงน้อยที่สุด"
      },
      {
        "key": "ข",
        "text": "ความเร็วในการประมวลผลข้อมูลขนาดใหญ่"
      },
      {
        "key": "ค",
        "text": "ความปลอดภัยจากการถูกแฮก"
      },
      {
        "key": "ง",
        "text": "การประหยัดพื้นที่บน Hard Disk Session 2: Flowcharts, Pseudocode & Algorithms (ข้อ 21 - 40)"
      }
    ],
    "answer": "ก",
    "explanation": "Portability คือความสามารถในการนำโปรแกรมไปรันข้าม Platform ต่างๆ ได้ง่าย"
  },
  {
    "id": 21,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์รูป \"เพชร\" (Decision/Diamond) ใน ผังงาน (Flowchart) จะต้องมีเส้นทางออกจากสัญลักษณ์อย่างน้อยกี่เส้นทาง?",
    "options": [
      {
        "key": "ก",
        "text": "1 เส้นทาง"
      },
      {
        "key": "ข",
        "text": "2 เส้นทาง"
      },
      {
        "key": "ค",
        "text": "3 เส้นทาง"
      },
      {
        "key": "ง",
        "text": "ไม่จำกัด"
      }
    ],
    "answer": "ข",
    "explanation": "สัญลักษณ์การตัดสินใจ (Decision) ต้องมีทางออกอย่างน้อย 2 ทางเสมอ (เช่น Yes/No, True/False)"
  },
  {
    "id": 22,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "จงหาผลลัพธ์ของ Pseudocode ต่อไปนี้: SET X = 10, Y = 20 X = X + Y Y = X - Y X = X - Y PRINT X, Y",
    "options": [
      {
        "key": "ก",
        "text": "10, 20"
      },
      {
        "key": "ข",
        "text": "20, 10"
      },
      {
        "key": "ค",
        "text": "30, -10"
      },
      {
        "key": "ง",
        "text": "30, 20"
      }
    ],
    "answer": "ข",
    "explanation": "เทคนิคการ Swap ค่า: X=10+20=30, Y=30-20=10, X=30-10=20 ได้ผลลัพธ์ X=20, Y=10"
  },
  {
    "id": 23,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "โครงสร้างสัญลักษณ์ Flowchart สำหรับการวนซ้ำแบบ Do-While แตกต่างจาก While อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "Do-While ตรวจสอบเงื่อนไขก่อนทำรอบแรกเสมอ"
      },
      {
        "key": "ข",
        "text": "Do-While ทำงานใน Block อย่างน้อย 1 รอบก่อนตรวจสอบเงื่อนไข"
      },
      {
        "key": "ค",
        "text": "While สามารถมีเส้นทางออกจาก Decision ได้ 3 ทาง"
      },
      {
        "key": "ง",
        "text": "ไม่มีความแตกต่างกันเชิงโครงสร้าง"
      }
    ],
    "answer": "ข",
    "explanation": "Do-While ทำงานใน Loop อย่างน้อย 1 รอบก่อนตรวจสอบเงื่อนไขที่ด้านล่าง"
  },
  {
    "id": 24,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดคือ Pseudocode ที่ใช้การทำงานแบบ Nested Loop ที่ถูกต้องในการสร้างตารางขนาด N x M?",
    "options": [
      {
        "key": "ก",
        "text": "FOR i = 1 TO N FOR j = 1 TO M PRINT \"*\" END FOR END FOR"
      },
      {
        "key": "ข",
        "text": "FOR i = 1 TO N AND j = 1 TO M PRINT \"*\" END FOR"
      },
      {
        "key": "ค",
        "text": "WHILE i < N PRINT \"*\" END WHILE"
      },
      {
        "key": "ง",
        "text": "IF i < N THEN FOR j = 1 TO M PRINT \"*\" END IF"
      }
    ],
    "answer": "ก",
    "explanation": "ลูปซ้อนลูปที่ถูกต้องสำหรับการสร้างตาราง N x M"
  },
  {
    "id": 25,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "หากพิจารณาอัลกอริทึมการค้นหาข้อมูลแบบ Binary Search เงื่อนไขเบื้องต้น (Prerequisite) ของข้อมูลนำเข้าคืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "ข้อมูลต้องมีจำนวนเป็นเลขคู่"
      },
      {
        "key": "ข",
        "text": "ข้อมูลต้องถูกจัดเรียงลำดับ (Sorted) อยู่แล้ว"
      },
      {
        "key": "ค",
        "text": "ข้อมูลต้องเก็บอยู่ใน Linked List เท่านั้น"
      },
      {
        "key": "ง",
        "text": "ข้อมูลห้ามมีค่าซ้ำกัน"
      }
    ],
    "answer": "ข",
    "explanation": "Binary Search จำเป็นต้องใช้กับข้อมูลที่ผ่านการจัดเรียง (Sorted) แล้วเท่านั้น"
  },
  {
    "id": 26,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ Off-page Connector ใน Flowchart ใช้เมื่อใด?",
    "options": [
      {
        "key": "ก",
        "text": "เมื่อต้องการเชื่อมจุดตัดภายในหน้าเดียวกัน"
      },
      {
        "key": "ข",
        "text": "เมื่อผังงานยาวเกินหน้ากระดาษปัจจุบันและต้องต่อขึ้นหน้าใหม่"
      },
      {
        "key": "ค",
        "text": "เมื่อต้องการแสดงการอ่านข้อมูลจากไฟล์เอกสาร"
      },
      {
        "key": "ง",
        "text": "เมื่อต้องรับค่า Input จากแป้นพิมพ์"
      }
    ],
    "answer": "ข",
    "explanation": "Off-page Connector (สัญลักษณ์บ้าน/ห้าเหลี่ยม) ใช้เชื่อมต่อผังงานข้ามหน้ากระดาษ"
  },
  {
    "id": 27,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดจัดเป็นข้อผิดพลาดแบบ Infinite Loop ใน Pseudocode?",
    "options": [
      {
        "key": "ก",
        "text": "FOR i = 1 TO 10 STEP 1"
      },
      {
        "key": "ข",
        "text": "i = 10; WHILE i > 0 DO { i = i + 1; }"
      },
      {
        "key": "ค",
        "text": "i = 0; WHILE i < 5 DO { i = i + 1; }"
      },
      {
        "key": "ง",
        "text": "FOR i = 10 DOWNTO 1"
      }
    ],
    "answer": "ข",
    "explanation": "i = 10 และเพิ่มค่า i = i + 1 เรื่อยๆ ทำให้เงื่อนไข i > 0 เป็นจริงตลอดกาล เกิด Infinite Loop"
  },
  {
    "id": 28,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "พิจารณา Pseudocode ต่อไปนี้ หากกำหนดให้ A = [3, 8, 2, 5, 1] ค่าของ MAX คือเท่าใดหลังจบโปรแกรม? SET MAX = A[0] FOR i = 1 TO 4 IF A[i] > MAX THEN MAX = A[i] END IF END FOR",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "5"
      },
      {
        "key": "ค",
        "text": "8"
      },
      {
        "key": "ง",
        "text": "1"
      }
    ],
    "answer": "ค",
    "explanation": "อัลกอริทึมค้นหาค่าสูงสุด ในอาร์เรย์ [3, 8, 2, 5, 1] ค่าสูงสุดคือ 8"
  },
  {
    "id": 29,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "เทคนิค Top-Down Design ในการเขียน Pseudocode และ Algorithm คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "เขียนโค้ดจากบรรทัดล่างสุดขึ้นบน"
      },
      {
        "key": "ข",
        "text": "แตกปัญหาใหญ่ให้ออกเป็นปัญหาย่อยๆ (Sub-problems) ที่จัดการได้ง่ายขึ้นตามลำดับ"
      },
      {
        "key": "ค",
        "text": "การทดสอบระบบด้วยการจำลองข้อมูลจริง"
      },
      {
        "key": "ง",
        "text": "การแปลง Pseudocode ให้เป็น Machine Code โดยตรง"
      }
    ],
    "answer": "ข",
    "explanation": "Top-Down Design คือการย่อยปัญหาใหญ่ให้ออกเป็นปัญหาย่อยๆ (Decomposition)"
  },
  {
    "id": 30,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์สี่เหลี่ยมผืนผ้า (Rectangle) ใน Flowchart ใช้แทนการทำงานประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "Input/Output"
      },
      {
        "key": "ข",
        "text": "Process / Calculation / Assignment"
      },
      {
        "key": "ค",
        "text": "Start / End"
      },
      {
        "key": "ง",
        "text": "Manual Operation"
      }
    ],
    "answer": "ข",
    "explanation": "สี่เหลี่ยมผืนผ้า คือ Process / Calculation / Assignment"
  },
  {
    "id": 31,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "อัลกอริทึมประเภท Divide and Conquer มีลักษณะการทำงานตามข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "แก้ปัญหาทีละขั้นตอนเรียงตามลำดับอย่างตรงไปตรงมา"
      },
      {
        "key": "ข",
        "text": "แบ่งปัญหาเป็นส่วนย่อย แก้ปัญหาแต่ละส่วน แล้วนำผลลัพธ์มารวมกัน"
      },
      {
        "key": "ค",
        "text": "สุ่มเลือกทางเลือกเพื่อหาคำตอบที่ยอมรับได้"
      },
      {
        "key": "ง",
        "text": "ย้อนกลับไปทำขั้นตอนแรกใหม่เสมอหากคำตอบยังไม่ดีที่สุด"
      }
    ],
    "answer": "ข",
    "explanation": "Divide and Conquer: แบ่ง ย่อย และรวมผลลัพธ์ (เช่น Merge Sort, Quick Sort)"
  },
  {
    "id": 32,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "คำสั่ง STEP -2 ในการวนซ้ำ FOR i = 10 TO 1 STEP -2 จะทำให้ลูปทำงานทั้งหมดกี่รอบ?",
    "options": [
      {
        "key": "ก",
        "text": "4 รอบ"
      },
      {
        "key": "ข",
        "text": "5 รอบ"
      },
      {
        "key": "ค",
        "text": "6 รอบ"
      },
      {
        "key": "ง",
        "text": "10 รอบ"
      }
    ],
    "answer": "ข",
    "explanation": "รอบที่ i = 10, 8, 6, 4, 2 รวมทั้งหมด 5 รอบ"
  },
  {
    "id": 33,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "พิจารณาการคำนวณค่า N! (Factorial) แบบ Recursion เงื่อนไข Base Case ที่จำเป็นคืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "IF N > 1 RETURN N * Fact(N-1)"
      },
      {
        "key": "ข",
        "text": "IF N == 0 OR N == 1 RETURN 1"
      },
      {
        "key": "ค",
        "text": "IF N < 0 RETURN N"
      },
      {
        "key": "ง",
        "text": "WHILE N > 0 DO N--"
      }
    ],
    "answer": "ข",
    "explanation": "Base Case ของ Factorial คือ 0! = 1 หรือ 1! = 1"
  },
  {
    "id": 34,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ใดใน Flowchart ที่ใช้รับข้อมูลโดยไม่ระบุประเภทอุปกรณ์สื่อสาร/นำเข้า?",
    "options": [
      {
        "key": "ก",
        "text": "สี่เหลี่ยมด้านขนาน (Parallelogram)"
      },
      {
        "key": "ข",
        "text": "สี่เหลี่ยมผืนผ้าตัดมุม (Manual Input)"
      },
      {
        "key": "ค",
        "text": "วงกลม (Circle)"
      },
      {
        "key": "ง",
        "text": "ทรงกระบอก (Cylinder)"
      }
    ],
    "answer": "ก",
    "explanation": "สี่เหลี่ยมด้านขนาน (Parallelogram) ใช้แทน General Input/Output"
  },
  {
    "id": 35,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "จาก Pseudocode ด้านล่าง ผลลัพธ์ของ count เท่ากับเท่าใด? SET count = 0 FOR i = 1 TO 3 FOR j = 1 TO i count = count + 1 END FOR END FOR",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "6"
      },
      {
        "key": "ค",
        "text": "9"
      },
      {
        "key": "ง",
        "text": "12"
      }
    ],
    "answer": "ข",
    "explanation": "i=1 (j=1) -> 1; i=2 (j=1,2) -> 2; i=3 (j=1,2,3) -> 3 รวม 1+2+3 = 6"
  },
  {
    "id": 36,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "ข้อใดเขียน Pseudocode สำหรับตรวจสอบว่าตัวแปร NUM เป็นเลขคู่หรือไม่ ได้ถูกต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "IF NUM / 2 == 0 THEN PRINT \"Even\""
      },
      {
        "key": "ข",
        "text": "IF NUM MOD 2 == 0 THEN PRINT \"Even\""
      },
      {
        "key": "ค",
        "text": "IF NUM % 2 == 1 THEN PRINT \"Even\""
      },
      {
        "key": "ง",
        "text": "IF NUM DIV 2 == 0 THEN PRINT \"Even\""
      }
    ],
    "answer": "ข",
    "explanation": "การหาเลขคู่ใช้ตัวดำเนินการ Modulus (NUM MOD 2 == 0) หรือเศษเหลือจากการหารสองเท่ากับ 0"
  },
  {
    "id": 37,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "สัญลักษณ์ \"แคปซูล\" หรือ \"สี่เหลี่ยมมุมมน\" (Terminal) ใน Flowchart ใช้สำหรับอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "แสดงจุดเริ่มต้น (Start) หรือ จุดสิ้นสุด (End) ของผังงาน"
      },
      {
        "key": "ข",
        "text": "แสดงการตัดสินใจ"
      },
      {
        "key": "ค",
        "text": "แสดงการประมวลผลคำนวณ"
      },
      {
        "key": "ง",
        "text": "แสดงการพิมพ์รายงานออกทางเครื่องพิมพ์"
      }
    ],
    "answer": "ก",
    "explanation": "Terminal Symbol ใช้แสดงจุดเริ่มต้น (Start) และจุดสิ้นสุด (End)"
  },
  {
    "id": 38,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "เมื่อแปลง Dry-run Trace Table ของอัลกอริทึม การบันทึก State ของตัวแปรมีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "เพื่อเพิ่มความเร็วในการประมวลผลของ Compiler"
      },
      {
        "key": "ข",
        "text": "เพื่อติดตามการเปลี่ยนแปลงค่าของตัวแปรในแต่ละรอบการประมวลผลเพื่อตรวจสอบตรรกะ"
      },
      {
        "key": "ค",
        "text": "เพื่อคำนวณขนาดการใช้พื้นที่ใน RAM"
      },
      {
        "key": "ง",
        "text": "เพื่อใช้สร้างไฟล์ Executable"
      }
    ],
    "answer": "ข",
    "explanation": "Trace table ช่วยไล่ตรวจติดตามการเปลี่ยนแปลงของตัวแปรเพื่อตรวจหา Logic Error"
  },
  {
    "id": 39,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "Pseudocode ข้อใดแสดงการทำงานแบบ \"Swapping\" ค่าสองตัวแปรโดยไม่ใช้ตัวแปรชั่วคราว (Temporary Variable)?",
    "options": [
      {
        "key": "ก",
        "text": "A = B; B = A;"
      },
      {
        "key": "ข",
        "text": "A = A + B; B = A - B; A = A - B;"
      },
      {
        "key": "ค",
        "text": "TEMP = A; A = B; B = TEMP;"
      },
      {
        "key": "ง",
        "text": "A = B + 1; B = A - 1;"
      }
    ],
    "answer": "ข",
    "explanation": "การสลับค่าโดยไม่ใช้ตัวแปรชั่วคราวอาศัยการบวกลบ (หรือ Bitwise XOR)"
  },
  {
    "id": 40,
    "category": "Session 02: Flowcharts, Pseudocode & Algorithms (ข้อ 21-40)",
    "categoryKey": "cat2",
    "question": "คุณลักษณะที่ดีของ อัลกอริทึม (Algorithm) ข้อใดสำคัญที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "ต้องเขียนด้วยภาษาระดับสูงเท่านั้น"
      },
      {
        "key": "ข",
        "text": "ต้องมีจุดสิ้นสุดที่แน่นอน (Finiteness) และมีผลลัพธ์ที่ถูกต้องชัดเจน (Definiteness)"
      },
      {
        "key": "ค",
        "text": "ต้องใช้ตัวแปรให้น้อยที่สุดเสมอ"
      },
      {
        "key": "ง",
        "text": "ต้องเขียนให้อยู่ในรูปของสัญลักษณ์ Flowchart เท่านั้น Session 3: Data Types, Operators & Expressions (ข้อ 41 - 60)"
      }
    ],
    "answer": "ข",
    "explanation": "อัลกอริทึมที่ดีต้องมีจุดสิ้นสุดชัดเจน (Finiteness) และผลลัพธ์ถูกต้องแน่นอน (Definiteness)"
  },
  {
    "id": 41,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "กำหนดให้ a = 5, b = 2 ในภาษา C/C++ นิพจน์ (float)a / b มีค่าเท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "2.0"
      },
      {
        "key": "ข",
        "text": "2.5"
      },
      {
        "key": "ค",
        "text": "2"
      },
      {
        "key": "ง",
        "text": "2.5000 (เป็นข้อมูลประเภท Integer)"
      }
    ],
    "answer": "ข",
    "explanation": "(float)a แปลง a เป็น 5.0 จากนั้นหารด้วย 2 (Implicit Conversion) ได้ 2.5"
  },
  {
    "id": 42,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "นิพจน์ทางตรรกศาสตร์ !(A && B) || C จะมีค่าเป็น FALSE ในกรณีใด?",
    "options": [
      {
        "key": "ก",
        "text": "A = True, B = True, C = False"
      },
      {
        "key": "ข",
        "text": "A = True, B = False, C = False"
      },
      {
        "key": "ค",
        "text": "A = False, B = False, C = True"
      },
      {
        "key": "ง",
        "text": "A = True, B = True, C = True"
      }
    ],
    "answer": "ก",
    "explanation": "!(T && T)"
  },
  {
    "id": 43,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "พิจารณาลำดับความสำคัญของตัวดำเนินการ (Operator Precedence) นิพจน์ 10 + 4 * 3 / 2 - 1 ได้ผลลัพธ์เท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "20"
      },
      {
        "key": "ข",
        "text": "15"
      },
      {
        "key": "ค",
        "text": "16"
      },
      {
        "key": "ง",
        "text": "12"
      }
    ],
    "answer": "ข",
    "explanation": "คูณหารทำก่อนจากซ้ายไปขวา: 4 x 3 = 12 -> 12 / 2 = 6; แล้วบวกลบ: 10 + 6 - 1 = 15"
  },
  {
    "id": 44,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "การทำงานของ Bitwise Operator 5 & 3 (5 AND 3) ให้ผลลัพธ์ในระบบฐานสิบเท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "1"
      },
      {
        "key": "ข",
        "text": "7"
      },
      {
        "key": "ค",
        "text": "0"
      },
      {
        "key": "ง",
        "text": "2"
      }
    ],
    "answer": "ก",
    "explanation": "5 = 101_2, 3 = 011_2; 101_2 & 011_2 = 001_2 = 1"
  },
  {
    "id": 45,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "หากทำการ Shift Bit ทางซ้าย: x << 2 โดยกำหนดให้ x = 3 (ในระบบฐานสิบ) ผลลัพธ์จะเป็นเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "6"
      },
      {
        "key": "ข",
        "text": "12"
      },
      {
        "key": "ค",
        "text": "1.5"
      },
      {
        "key": "ง",
        "text": "8"
      }
    ],
    "answer": "ข",
    "explanation": "Bitwise Left Shift: x << n = x * 2^n => 3 * 2^2 = 12"
  },
  {
    "id": 46,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดบรรยายลักษณะของ \"Short-circuit Evaluation\" ในตัวดำเนินการตรรกศาสตร์ && (AND) ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "ประเมินนิพจน์ทางขวาก่อนเสมอ"
      },
      {
        "key": "ข",
        "text": "ถ้านิพจน์ทางซ้ายเป็น False จะไม่ประเมินนิพจน์ทางขวาต่อทันที"
      },
      {
        "key": "ค",
        "text": "ถ้านิพจน์ทางซ้ายเป็น True จะหยุดประเมินทันที"
      },
      {
        "key": "ง",
        "text": "ทำการประเมินทั้งสองฝั่งเสมอเพื่อความถูกต้อง"
      }
    ],
    "answer": "ข",
    "explanation": "สำหรับ && ถ้าตัวหน้าเป็น False ผลลัพธ์รวมย่อมเป็น False แน่นอน จึงไม่ประเมินตัวหลังต่อ"
  },
  {
    "id": 47,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ขนาดของชนิดข้อมูล (Data Type Size) ขึ้นอยู่กับสิ่งใดมากที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "ขนาดของไฟล์ซอร์สโค้ด"
      },
      {
        "key": "ข",
        "text": "สถาปัตยกรรมของระบบคอมพิวเตอร์และ Compiler (เช่น 32-bit vs 64-bit)"
      },
      {
        "key": "ค",
        "text": "จำนวนตัวแปรที่ประกาศในโปรแกรม"
      },
      {
        "key": "ง",
        "text": "ความเร็วของ CPU"
      }
    ],
    "answer": "ข",
    "explanation": "ขนาด Data type ขึ้นอยู่กับ architecture (เช่น 32/64 bit) และตัว Compiler"
  },
  {
    "id": 48,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "จงหาค่าของ x หลังจากการประมวลผลคำสั่งต่อไปนี้: int x = 5; int y = x++;",
    "options": [
      {
        "key": "ก",
        "text": "x = 5, y = 5"
      },
      {
        "key": "ข",
        "text": "x = 6, y = 5"
      },
      {
        "key": "ค",
        "text": "x = 6, y = 6"
      },
      {
        "key": "ง",
        "text": "x = 5, y = 6"
      }
    ],
    "answer": "ข",
    "explanation": "y = x++ (Post-increment) ให้ y รับค่าเดิม (5) ไปก่อน แล้ว x ค่อยบวกเพิ่มเป็น 6"
  },
  {
    "id": 49,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดต่อไปนี้ตั้งชื่อตัวแปร (Identifier) ถูกต้องตามหลักสากล?",
    "options": [
      {
        "key": "ก",
        "text": "2nd_number"
      },
      {
        "key": "ข",
        "text": "float"
      },
      {
        "key": "ค",
        "text": "_user_total_score"
      },
      {
        "key": "ง",
        "text": "user-name"
      }
    ],
    "answer": "ค",
    "explanation": "ชื่อตัวแปรสามารถขึ้นต้นด้วย _ ได้ ตัวเลือกอื่นผิดกฎ (ขึ้นต้นด้วยตัวเลข, เป็นคำห้าม, มีเครื่องหมายลบ)"
  },
  {
    "id": 50,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ผลลัพธ์ของการคำนวณ 13 % 5 (Modulus) เท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "2.6"
      },
      {
        "key": "ข",
        "text": "2"
      },
      {
        "key": "ค",
        "text": "3"
      },
      {
        "key": "ง",
        "text": "0"
      }
    ],
    "answer": "ค",
    "explanation": "13 หารด้วย 5 ได้ 2 เศษ 3 ผลลัพธ์การ Modulus คือ 3"
  },
  {
    "id": 51,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "Implicit Type Conversion (Coercion) เกิดขึ้นเมื่อใด?",
    "options": [
      {
        "key": "ก",
        "text": "เมื่อโปรแกรมเมอร์เขียน cast explicit เช่น (int)3.14"
      },
      {
        "key": "ข",
        "text": "เมื่อตัวดำเนินการกระทำกับ operand ต่าง data type กัน แล้วภาษาแปลงชนิดข้อมูลให้โดยอัตโนมัติ"
      },
      {
        "key": "ค",
        "text": "เมื่อโปรแกรมเกิด Runtime Error"
      },
      {
        "key": "ง",
        "text": "เมื่อแปลงค่าตัวแปรผ่านการรับค่าทาง Keyboard"
      }
    ],
    "answer": "ข",
    "explanation": "Implicit type conversion เกิดขึ้นโดยอัตโนมัติเมื่อประมวลผล operand ต่างชนิดกัน"
  },
  {
    "id": 52,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ในระบบรหัส ASCII ตัวอักษร 'A' มีค่าเท่ากับ 65 (ฐานสิบ) นิพจน์ 'C' - 'A' จะมีค่าเท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "67"
      },
      {
        "key": "ข",
        "text": "2"
      },
      {
        "key": "ค",
        "text": "'B'"
      },
      {
        "key": "ง",
        "text": "-2"
      }
    ],
    "answer": "ข",
    "explanation": "'C' มีรหัส 67, 'A' มีรหัส 65 -> 67 - 65 = 2"
  },
  {
    "id": 53,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ชนิดข้อมูลประเภท unsigned int ต่างจาก signed int อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "unsigned int ใช้พื้นที่ Memory มากกว่า 2 เท่า"
      },
      {
        "key": "ข",
        "text": "unsigned int ไม่สามารถเก็บค่าติดลบได้ ทำให้ช่วงค่าบวกกว้างขึ้นเป็น 2 เท่า"
      },
      {
        "key": "ค",
        "text": "unsigned int สามารถเก็บทศนิยมได้"
      },
      {
        "key": "ง",
        "text": "unsigned int ทำงานช้ากว่า signed int"
      }
    ],
    "answer": "ข",
    "explanation": "unsigned ตัดช่วงติดลบออก แล้วนำพื้นที่ Bit ไปขยายช่วงค่าบวกได้เป็น 2 เท่า"
  },
  {
    "id": 54,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "นิพจน์แบบ Ternary Operator ในข้อใดทำงานเทียบเท่ากับโครงสร้าง if (a > b) max = a; else max = b;?",
    "options": [
      {
        "key": "ก",
        "text": "max = (a > b) : a ? b;"
      },
      {
        "key": "ข",
        "text": "max = (a > b) ? a : b;"
      },
      {
        "key": "ค",
        "text": "max = if(a > b) ? a : b;"
      },
      {
        "key": "ง",
        "text": "(a > b) ? max = a : max = b;"
      }
    ],
    "answer": "ข",
    "explanation": "Ternary Syntax: condition ? expr_if_true : expr_if_false;"
  },
  {
    "id": 55,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ข้อใดเกิดปัญหา Overflow ชัดเจนที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "กำหนดค่า 300 ให้กับตัวแปรประเภท 8-bit signed integer (ซึ่งเก็บได้ระหว่าง -128 ถึง 127)"
      },
      {
        "key": "ข",
        "text": "หารตัวเลขด้วย 0"
      },
      {
        "key": "ค",
        "text": "แปลง Float เป็น Double"
      },
      {
        "key": "ง",
        "text": "นำ String ความยาว 5 ตัวอักษรไปต่อกับ String อื่น"
      }
    ],
    "answer": "ก",
    "explanation": "signed 8-bit int เก็บได้สูงสุด 127 การใส่ค่า 300 จะเกิด Integer Overflow"
  },
  {
    "id": 56,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "นิพจน์ 5 + 2 * 3 ^ 2 (ให้ ^ แทนการยกกำลัง) ตามหลักคณิตศาสตร์มาตรฐานมีค่าเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "63"
      },
      {
        "key": "ข",
        "text": "23"
      },
      {
        "key": "ค",
        "text": "441"
      },
      {
        "key": "ง",
        "text": "147"
      }
    ],
    "answer": "ข",
    "explanation": "ยกกำลังก่อน: 3^2=9 -> คูณ: 2 x 9 = 18 -> บวก: 5 + 18 = 23"
  },
  {
    "id": 57,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ค่าความจริง (Boolean) ในภาษา C มาตรฐาน (C99 ลงไป) Represent ค่า True/False อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "True = \"TRUE\", False = \"FALSE\""
      },
      {
        "key": "ข",
        "text": "True = 1 เท่านั้น, False = -1 เท่านั้น"
      },
      {
        "key": "ค",
        "text": "True = ค่าใดๆ ที่ไม่ใช่ 0, False = 0"
      },
      {
        "key": "ง",
        "text": "True = 0, False = 1"
      }
    ],
    "answer": "ค",
    "explanation": "ภาษา C มองค่า 0 เป็น False และค่าที่ไม่ใช่ 0 (Non-zero) ทั้งหมดเป็น True"
  },
  {
    "id": 58,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "การคำนวณแบบ Floating-point precision issue เช่น 0.1 + 0.2 != 0.3 เกิดจากสาเหตุใด?",
    "options": [
      {
        "key": "ก",
        "text": "ข้อผิดพลาดของ Compiler"
      },
      {
        "key": "ข",
        "text": "การแปลงตัวเลขฐานสิบที่มีทศนิยมเป็นระบบฐานสองแบบคงที่เกิดการปัดเศษ (IEEE 754 Representation)"
      },
      {
        "key": "ค",
        "text": "RAM ประมวลผลช้าเกินไป"
      },
      {
        "key": "ง",
        "text": "การใช้ชนิดข้อมูลแบบ Double แทน Float"
      }
    ],
    "answer": "ข",
    "explanation": "Floating-point precision issue ตามมาตรฐาน IEEE 754 ไม่สามารถแปลงเลขทศนิยมฐานสิบเป็นฐานสองได้ลงตัวเป๊ะๆ"
  },
  {
    "id": 59,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "จงหาค่าของ result จากนิพจน์: int result = (5 == 5) && (3 > 8) || (2 <= 2);",
    "options": [
      {
        "key": "ก",
        "text": "0 (False)"
      },
      {
        "key": "ข",
        "text": "1 (True)"
      },
      {
        "key": "ค",
        "text": "Syntax Error"
      },
      {
        "key": "ง",
        "text": "Null"
      }
    ],
    "answer": "ข",
    "explanation": "(T) && (F)"
  },
  {
    "id": 60,
    "category": "Session 03: Data Types, Operators & Expressions (ข้อ 41-60)",
    "categoryKey": "cat3",
    "question": "ตัวดำเนินการ Compound Assignment ข้อใดมีความหมายเทียบเท่ากับ x = x * (y + 3)?",
    "options": [
      {
        "key": "ก",
        "text": "x *= y + 3;"
      },
      {
        "key": "ข",
        "text": "x =* y + 3;"
      },
      {
        "key": "ค",
        "text": "x *+= y + 3;"
      },
      {
        "key": "ง",
        "text": "x = x * y + 3; Session 4: Control Structures (Selection & Iteration) (ข้อ 61 - 80)"
      }
    ],
    "answer": "ก",
    "explanation": "x *= y + 3 เทียบเท่ากับ x = x * (y + 3) ตามหลักการจัดกลุ่ม Compound Assignment"
  },
  {
    "id": 61,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "โค้ดภาษา C ต่อไปนี้จะพิมพ์คำว่าอะไรออกทางหน้าจอ? int x = 2; switch(x) { case 1: printf(\"One \"); case 2: printf(\"Two \"); case 3: printf(\"Three \"); default: printf(\"Default\"); }",
    "options": [
      {
        "key": "ก",
        "text": "Two"
      },
      {
        "key": "ข",
        "text": "Two Three"
      },
      {
        "key": "ค",
        "text": "Two Three Default"
      },
      {
        "key": "ง",
        "text": "Default"
      }
    ],
    "answer": "ค",
    "explanation": "เนื่องจากไม่มีคำสั่ง break; หลัง case 2 โปรแกรมจะทำงานทะลุผ่าน (Fall-through) ไปยัง case 3 และ default"
  },
  {
    "id": 62,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "เหตุใดคำสั่ง switch-case จึงไม่เหมาะสำหรับการตรวจสอบเงื่อนไขประเภทใด?",
    "options": [
      {
        "key": "ก",
        "text": "การเปรียบเทียบค่าความเท่ากันของ Integer"
      },
      {
        "key": "ข",
        "text": "การตรวจสอบเงื่อนไขที่เป็นช่วงข้อมูล (Range check) เช่น x >= 80 && x <= 100"
      },
      {
        "key": "ค",
        "text": "การตรวจสอบตัวอักษร (Char)"
      },
      {
        "key": "ง",
        "text": "การใช้นิพจน์ Enum"
      }
    ],
    "answer": "ข",
    "explanation": "switch-case เหมาะกับการเช็คค่าคงที่เฉพาะเจาะจง ไม่เหมาะกับการเช็คช่วงเงื่อนไข (Range)"
  },
  {
    "id": 63,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ลูปชนิดใดประกันว่าบล็อกคำสั่งภายในจะถูกรันอย่างน้อย 1 ครั้งแน่นอนเสมอ?",
    "options": [
      {
        "key": "ก",
        "text": "for loop"
      },
      {
        "key": "ข",
        "text": "while loop"
      },
      {
        "key": "ค",
        "text": "do-while loop"
      },
      {
        "key": "ง",
        "text": "foreach loop"
      }
    ],
    "answer": "ค",
    "explanation": "do-while เช็คเงื่อนไขทีหลัง จึงการันตีการทำงานอย่างน้อย 1 รอบเสมอ"
  },
  {
    "id": 64,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "คำสั่ง break และ continue มีความแตกต่างกันอย่างไรในการควบคุม ลูป?",
    "options": [
      {
        "key": "ก",
        "text": "break ข้ามไปรอบถัดไป, continue ออกจากลูปทันที"
      },
      {
        "key": "ข",
        "text": "break ออกจากลูปทันที, continue ข้ามคำสั่งที่เหลือในรอบปัจจุบันแล้วไปเริ่มรอบถัดไป"
      },
      {
        "key": "ค",
        "text": "break หยุดการทำงานของโปรแกรมทั้งหมด, continue เริ่มต้นลูปใหม่ตั้งแต่รอบแรก"
      },
      {
        "key": "ง",
        "text": "ไม่มีความแตกต่างกัน"
      }
    ],
    "answer": "ข",
    "explanation": "break หลุดออกจากลูปทันที; continue ข้ามไปรอบถัดไปทันที"
  },
  {
    "id": 65,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "พิจารณาโค้ดต่อไปนี้ ข้อใดเป็นผลลัพธ์ของ sum? int sum = 0; for (int i = 0; i < 5; i++) { if (i % 2 == 0) continue; sum += i; }",
    "options": [
      {
        "key": "ก",
        "text": "4"
      },
      {
        "key": "ข",
        "text": "6"
      },
      {
        "key": "ค",
        "text": "10"
      },
      {
        "key": "ง",
        "text": "0"
      }
    ],
    "answer": "ก",
    "explanation": "รอบ i=1 (1%2 != 0 => sum+=1), รอบ i=3 (3%2 != 0 => sum+=3) ผลรวมคือ 1+3 = 4"
  },
  {
    "id": 66,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "การเขียนเงื่อนไข if (x = 5) แทนที่จะเป็น if (x == 5) จะส่งผลอย่างไรในภาษา C?",
    "options": [
      {
        "key": "ก",
        "text": "เกิด Syntax Error Compile ไม่ผ่าน"
      },
      {
        "key": "ข",
        "text": "กำหนดค่า 5 ให้ x และเงื่อนไขประเมินเป็น True เสมอ"
      },
      {
        "key": "ค",
        "text": "เกิด Runtime Crash"
      },
      {
        "key": "ง",
        "text": "โปรแกรมจะละเว้นบล็อก if ไปทำ else"
      }
    ],
    "answer": "ข",
    "explanation": "x = 5 คือ Assignment ได้ผลลัพธ์เป็น 5 (ซึ่งไม่ใช่ 0) ทำให้ประเมินเป็น True เสมอ"
  },
  {
    "id": 67,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือจำนวนรอบการทำงานของลูป for (int i = 10; i > 0; i /= 2)?",
    "options": [
      {
        "key": "ก",
        "text": "10 รอบ"
      },
      {
        "key": "ข",
        "text": "5 รอบ"
      },
      {
        "key": "ค",
        "text": "4 รอบ"
      },
      {
        "key": "ง",
        "text": "Infinite loop"
      }
    ],
    "answer": "ค",
    "explanation": "i = 10, 5, 2, 1 เมื่อ i = 0 เงื่อนไข 0 > 0 เป็นเท็จ หยุดทำงาน รวมเป็น 4 รอบ"
  },
  {
    "id": 68,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "พิจารณา Nested Loop ต่อไปนี้ คำว่า \"Hello\" จะถูกพิมพ์กี่ครั้ง? for(int i=0; i<3; i++) { for(int j=0; j<4; j++) { printf(\"Hello \"); } }",
    "options": [
      {
        "key": "ก",
        "text": "7 ครั้ง"
      },
      {
        "key": "ข",
        "text": "12 ครั้ง"
      },
      {
        "key": "ค",
        "text": "3 ครั้ง"
      },
      {
        "key": "ง",
        "text": "4 ครั้ง"
      }
    ],
    "answer": "ข",
    "explanation": "ลูปนอก 3 รอบ ลูปใน 4 รอบ ทำงานทั้งหมด 3 x 4 = 12 ครั้ง"
  },
  {
    "id": 69,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดอธิบายโครงสร้างการทำงานของ Dangling Else Problem ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "คำสั่ง else ที่ไม่มีการใส่เครื่องหมายปาท่องโก๋ {} จะถูกผูกกับ if ตัวที่ใกล้ที่สุดก่อนเสมอ"
      },
      {
        "key": "ข",
        "text": "คำสั่ง else ทำงานโดยไม่สนใจเงื่อนไข if"
      },
      {
        "key": "ค",
        "text": "โปรแกรมค้างเนื่องจากวนลูปไม่สิ้นสุด"
      },
      {
        "key": "ง",
        "text": "else ทำงานพร้อมกับ if เสมอ"
      }
    ],
    "answer": "ก",
    "explanation": "Dangling Else: คำสั่ง else ที่ลอยอยู่จะจับคู่กับ if ตัวที่ใกล้ที่สุดเสมอหากไม่มีปาท่องโก๋ {}"
  },
  {
    "id": 70,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "โค้ดนี้จะให้ผลลัพธ์อย่างไร? int i = 0; while(i < 3); { printf(\"%d \", i); i++; }",
    "options": [
      {
        "key": "ก",
        "text": "0 1 2"
      },
      {
        "key": "ข",
        "text": "0 1 2 3"
      },
      {
        "key": "ค",
        "text": "ติด Infinite Loop (ไม่พิมพ์อะไรเลยออกหน้าจอ)"
      },
      {
        "key": "ง",
        "text": "Compile Error"
      }
    ],
    "answer": "ค",
    "explanation": "เครื่องหมาย ; หลัง while(i < 3); ทำให้เกิดลูปว่างเปล่าที่ติด Infinite Loop อยู่บรรทัดนั้น"
  },
  {
    "id": 71,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "โครงสร้างทางเลือกแบบใดที่ใช้ในการเลือกทำ 1 จากหลายๆ ทางเลือกด้วยการประเมินหลายเงื่อนไขตามลำดับ?",
    "options": [
      {
        "key": "ก",
        "text": "Simple If"
      },
      {
        "key": "ข",
        "text": "If-Else"
      },
      {
        "key": "ค",
        "text": "Nested If"
      },
      {
        "key": "ง",
        "text": "If-Else If-Else Ladder"
      }
    ],
    "answer": "ง",
    "explanation": "If-Else If-Else Ladder เหมาะสำหรับการเช็คหลายเงื่อนไขเรียงตามลำดับ"
  },
  {
    "id": 72,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดคือผลลัพธ์ของโปรแกรมต่อไปนี้? int a = 5, b = 10; if (a > 0) if (b < 5) printf(\"A\"); else printf(\"B\");",
    "options": [
      {
        "key": "ก",
        "text": "A"
      },
      {
        "key": "ข",
        "text": "B"
      },
      {
        "key": "ค",
        "text": "ไม่พิมพ์อะไรเลย"
      },
      {
        "key": "ง",
        "text": "Compile Error"
      }
    ],
    "answer": "ค",
    "explanation": "a > 0 เป็นจริง เข้ามาเช็ค b < 5 (10 < 5) เป็นเท็จ คำสั่ง else ถูกจับคู่กับ if (b < 5) จึงไม่พิมพ์อะไรเลย"
  },
  {
    "id": 73,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "การใช้งาน Loop Invariant หมายถึงอะไรในการพิสูจน์ความถูกต้องของโปรแกรม?",
    "options": [
      {
        "key": "ก",
        "text": "เงื่อนไขที่กลายเป็น False เสมอเมื่อจบลูป"
      },
      {
        "key": "ข",
        "text": "คุณสมบัติ/เงื่อนไขที่เป็นจริงเสมอ ทั้งก่อนเข้าลูป, ระหว่างการวนลูปทุกรอบ และหลังออกจากลูป"
      },
      {
        "key": "ค",
        "text": "ตัวแปรที่ใช้นับจำนวนรอบของลูป"
      },
      {
        "key": "ง",
        "text": "คำสั่งสั่งหยุดลูปกลางคัน"
      }
    ],
    "answer": "ข",
    "explanation": "Loop Invariant คือเงื่อนไขทางตรรกศาสตร์ที่เป็นจริงเสมอในทุกสเตจของลูป"
  },
  {
    "id": 74,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ลูปประเภท for ( ; ; ) ในภาษา C/C++ มีพฤติกรรมอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "เกิด Syntax Error เนื่องจากไม่มี Parameter"
      },
      {
        "key": "ข",
        "text": "เป็น Infinite Loop (วนลูปไม่สิ้นสุด)"
      },
      {
        "key": "ค",
        "text": "ไม่ทำงานเลยสักรอบ"
      },
      {
        "key": "ง",
        "text": "ทำงานเพียง 1 รอบ"
      }
    ],
    "answer": "ข",
    "explanation": "for(;;) ละเว้นทุกลูปพารามิเตอร์ มีค่าเท่ากับ Infinite Loop"
  },
  {
    "id": 75,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "เงื่อนไขใน while (x != 0) สามารถเขียนอีกรูปแบบหนึ่งสั้นๆ ได้อย่างไรในภาษา C?",
    "options": [
      {
        "key": "ก",
        "text": "while (!x)"
      },
      {
        "key": "ข",
        "text": "while (x)"
      },
      {
        "key": "ค",
        "text": "while (x == 1)"
      },
      {
        "key": "ง",
        "text": "while (x++)"
      }
    ],
    "answer": "ข",
    "explanation": "ในภาษา C while(x) มีความหมายตรงกับ while(x != 0)"
  },
  {
    "id": 76,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดจัดเป็นข้อเสียของการใช้ Nested Loop ลึกเกินไป (เช่น 4-5 ชั้น)?",
    "options": [
      {
        "key": "ก",
        "text": "ทำให้ขนาดไฟล์ Executable ใหญ่ขึ้นแบบ Exponential"
      },
      {
        "key": "ข",
        "text": "ทำให้ความซับซ้อนเชิงเวลา (Time Complexity) สูงขึ้นอย่างมาก ส่งผลให้โปรแกรมทำงานช้าลง"
      },
      {
        "key": "ค",
        "text": "ทำให้เกิด Syntax Error บน Compiler ยุคใหม่"
      },
      {
        "key": "ง",
        "text": "ทำให้ตัวแปรถูกลบออกจาก Memory"
      }
    ],
    "answer": "ข",
    "explanation": "Nested loop ยิ่งลึกจะยิ่งเพิ่มความซับซ้อนเชิงเวลาแบบ Polynomial/Exponential (O(n^k))"
  },
  {
    "id": 77,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "พิจารณาโค้ดนี้ ผลลัพธ์สุดท้ายของ a คือเท่าใด? int a = 1; do { a += 2; } while(a < 5);",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "5"
      },
      {
        "key": "ค",
        "text": "7"
      },
      {
        "key": "ง",
        "text": "1"
      }
    ],
    "answer": "ข",
    "explanation": "รอบที่ 1: a = 1+2 = 3 (เงื่อนไข 3 < 5 True) -> รอบที่ 2: a = 3+2 = 5 (เงื่อนไข 5 < 5 False) ออกจากลูป a=5"
  },
  {
    "id": 78,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "ข้อใดระบุข้อผิดพลาดของโค้ดต่อไปนี้ได้ถูกต้อง? for (float f = 0.0; f != 1.0; f += 0.1) { printf(\"%f \", f); }",
    "options": [
      {
        "key": "ก",
        "text": "ตัวแปรลูปห้ามใช้ Float"
      },
      {
        "key": "ข",
        "text": "อาจติด Infinite Loop เนื่องจากปัญหาการปัดเศษ (Floating-point precision) ทำให้ f อาจไม่เท่ากับ 1.0 แบบเป๊ะๆ"
      },
      {
        "key": "ค",
        "text": "คำสั่ง printf ใช้ Format Specifier ผิด"
      },
      {
        "key": "ง",
        "text": "โค้ดทำงานถูกต้องเรียบร้อย พิมพ์ 0.0 ถึง 0.9"
      }
    ],
    "answer": "ข",
    "explanation": "ค่า f อาจเป็น 0.999999 ซึ่งไม่เท่ากับ 1.0 พอดี ทำให้เกิด Infinite Loop"
  },
  {
    "id": 79,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "การทำ \"Loop Unrolling\" เป็นเทคนิคเพื่ออะไรในการปรับแต่งโปรแกรม (Optimization)?",
    "options": [
      {
        "key": "ก",
        "text": "ลดจำนวนครั้งในการเช็คเงื่อนไขลูป เพื่อเพิ่มความเร็วในการประมวลผล"
      },
      {
        "key": "ข",
        "text": "ช่วยประหยัด RAM"
      },
      {
        "key": "ค",
        "text": "เปลี่ยนลูปเป็นโครงสร้าง Recursion"
      },
      {
        "key": "ง",
        "text": "ป้องกันการเกิด Stack Overflow"
      }
    ],
    "answer": "ก",
    "explanation": "Loop Unrolling ลด Overhead การเช็คเงื่อนไขหัวลูป ช่วยให้ CPU ประมวลผลเร็วขึ้น"
  },
  {
    "id": 80,
    "category": "Session 04: Control Structures (Selection & Iteration) (ข้อ 61-80)",
    "categoryKey": "cat4",
    "question": "คำสั่ง switch ในภาษา C มาตรฐาน ไม่สามารถ ใช้กับชนิดข้อมูลประเภทใดได้?",
    "options": [
      {
        "key": "ก",
        "text": "int"
      },
      {
        "key": "ข",
        "text": "char"
      },
      {
        "key": "ค",
        "text": "enum"
      },
      {
        "key": "ง",
        "text": "double Session 5: Functions, Scope & Memory Management (ข้อ 81 - 100)"
      }
    ],
    "answer": "ง",
    "explanation": "คำสั่ง switch รับได้เฉพาะชนิดข้อมูลแบบ Integral (int, char, enum) ไม่รองรับ Float/Double"
  },
  {
    "id": 81,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "การประกาศ Function Prototype ก่อนฟังก์ชัน main() มีวัตถุประสงค์หลักเพื่ออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "เพื่อจอง Memory ใน Heap"
      },
      {
        "key": "ข",
        "text": "เพื่อแจ้ง Compiler ให้ทราบถึงชื่อ, ชนิดข้อมูลคืนค่า (Return type) และ Parameter ของฟังก์ชันก่อนการเรียกใช้งานจริง"
      },
      {
        "key": "ค",
        "text": "เพื่อเพิ่มความเร็วในการ Run โปรแกรม"
      },
      {
        "key": "ง",
        "text": "เพื่อสร้างตัวแปรแบบ Global"
      }
    ],
    "answer": "ข",
    "explanation": "Function Prototype แจ้งข้อมูลป้ายชื่อและลายเซ็นของฟังก์ชันให้ Compiler ทราบล่วงหน้า"
  },
  {
    "id": 82,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่ง static เมื่อใช้ประกาศหน้าตัวแปรใน Local Scope ของฟังก์ชัน มีผลอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ทำให้ตัวแปรนั้นกลายเป็น Constant ห้ามแก้ไขค่า"
      },
      {
        "key": "ข",
        "text": "ทำให้ตัวแปรคงค่าเดิมไว้ไม่ถูกทำลายแม้ว่าจะจบการทำงานของฟังก์ชันไปแล้ว"
      },
      {
        "key": "ค",
        "text": "ทำให้ฟังก์ชันอื่นสามารถเรียกใช้ตัวแปรนี้ได้โดยตรง"
      },
      {
        "key": "ง",
        "text": "ส่งตัวแปรไปเก็บไว้ใน CPU Register"
      }
    ],
    "answer": "ข",
    "explanation": "static local variable จะถูกจัดเก็บใน Data Segment ทำให้ค่าคงอยู่ตลอดชีวิตโปรแกรม"
  },
  {
    "id": 83,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ผลลัพธ์ของการรันโปรแกรมนี้คืออะไร? #include <stdio.h> void update(int x) { x = x * 2; } int main() { int num = 10; update(num); printf(\"%d\", num); return 0; }",
    "options": [
      {
        "key": "ก",
        "text": "10"
      },
      {
        "key": "ข",
        "text": "20"
      },
      {
        "key": "ค",
        "text": "0"
      },
      {
        "key": "ง",
        "text": "Garbage Value"
      }
    ],
    "answer": "ก",
    "explanation": "ภาษา C ส่งค่าแบบ Pass-by-Value เป็นหลัก การแก้ไข x ในฟังก์ชันไม่กระทบค่า num ใน main()"
  },
  {
    "id": 84,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "แนวคิดเรื่อง Recursion ข้อใดที่เสี่ยงต่อการทำให้เกิด \"Stack Overflow\" มากที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "การเขียน Base Case ไว้บรรทัดแรก"
      },
      {
        "key": "ข",
        "text": "การไม่มี Base Case หรือเงื่อนไขเพื่อหยุดการเรียกตัวเอง"
      },
      {
        "key": "ค",
        "text": "การส่ง Parameter แบบ Pass-by-Reference"
      },
      {
        "key": "ง",
        "text": "การคืนค่าข้อมูลประเภท Integer"
      }
    ],
    "answer": "ข",
    "explanation": "Recursion ที่ไม่มี Base Case จะเรียกตัวเองไปเรื่อยๆ จน Stack Frame เต็ม RAM เกิด Stack Overflow"
  },
  {
    "id": 85,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "การคืนค่าตำแหน่ง Pointer ของ Local Variable ออกจากฟังก์ชัน ถือเป็นความเสี่ยงอย่างไร (Dangling Pointer)?",
    "options": [
      {
        "key": "ก",
        "text": "เกิด Syntax Error ทันที"
      },
      {
        "key": "ข",
        "text": "เมื่อฟังก์ชันจบ Stack Frame ของ Local Variable นั้นจะถูกพังไป ทำให้ Pointer ชี้ไปยัง Memory ที่ไม่ปลอดภัย"
      },
      {
        "key": "ค",
        "text": "ทำให้ RAM เต็มทันที"
      },
      {
        "key": "ง",
        "text": "ไม่มีผลเสียใดๆ โปรแกรมทำงานได้ปกติ"
      }
    ],
    "answer": "ข",
    "explanation": "การคืนค่า Pointer ของ Local Variable นำไปสู่ Dangling Pointer เพราะ Memory นั้นถูก Deallocate ไปแล้ว"
  },
  {
    "id": 86,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ฟังก์ชันประเภท Inline Function ช่วยลด Overhead ของอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "Overhead ในการจองพื้นที่ Disk Space"
      },
      {
        "key": "ข",
        "text": "Overhead ในการจัดเก็บไฟล์ Source Code"
      },
      {
        "key": "ค",
        "text": "Function Call Overhead (การ Push/Pop Stack Frame และการ Jump สลับการทำงาน)"
      },
      {
        "key": "ง",
        "text": "Overhead ของการ Compile โค้ด"
      }
    ],
    "answer": "ค",
    "explanation": "Inline Function จะคัดลอกโค้ดไปวางตรงจุดเรียก ช่วยลด overhead การสร้าง Stack Frame"
  },
  {
    "id": 87,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "โครงสร้าง Stack Frame ของฟังก์ชันจัดเก็บสิ่งใดบ้าง?",
    "options": [
      {
        "key": "ก",
        "text": "Return Address, Local Variables, Function Parameters"
      },
      {
        "key": "ข",
        "text": "Dynamic Arrays, Global Variables"
      },
      {
        "key": "ค",
        "text": "Source Code, Binary Output"
      },
      {
        "key": "ง",
        "text": "File Descriptors, Heap Pointers"
      }
    ],
    "answer": "ก",
    "explanation": "Stack Frame เก็บ Return Address, Parameters, และ Local Variables ของฟังก์ชันนั้นๆ"
  },
  {
    "id": 88,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดคือลักษณะของ \"Pure Function\" ในหลักการออกแบบโปรแกรมที่ดี?",
    "options": [
      {
        "key": "ก",
        "text": "อ่านค่าและแก้ไข Global Variable เสมอ"
      },
      {
        "key": "ข",
        "text": "ให้ผลลัพธ์เหมือนเดิมเสมอเมื่อส่ง Argument ค่าเดิมเข้าไป และไม่มี Side Effects (ไม่แก้ไขภายนอก)"
      },
      {
        "key": "ค",
        "text": "ฟังก์ชันที่ไม่รับ Parameter และไม่ Return ค่า"
      },
      {
        "key": "ง",
        "text": "ฟังก์ชันที่ทำงานร่วมกับระบบ Hardware โดยตรง"
      }
    ],
    "answer": "ข",
    "explanation": "Pure Function: ให้ Output เดิมเสมอสำหรับ Input เดิม และไม่มี Side Effects"
  },
  {
    "id": 89,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "พิจารณาโค้ดต่อไปนี้ x จะมีค่าเท่าใดใน main()? int x = 5; // Global int main() { int x = 10; // Local printf(\"%d\", x); return 0; }",
    "options": [
      {
        "key": "ก",
        "text": "5"
      },
      {
        "key": "ข",
        "text": "10"
      },
      {
        "key": "ค",
        "text": "เกิดข้อผิดพลาด Variable Redeclaration Error"
      },
      {
        "key": "ง",
        "text": "15"
      }
    ],
    "answer": "ข",
    "explanation": "Local variable จะทำหน้าที่ \"Shadow\" (บดบัง) Global variable ที่มีชื่อซ้ำกันใน Scope นั้น"
  },
  {
    "id": 90,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดอธิบายพฤติกรรมของการส่งค่าแบบ Pass-by-Reference ได้ถูกต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "ฟังก์ชันทำงานกับ Copy ของข้อมูลดั้งเดิม"
      },
      {
        "key": "ข",
        "text": "ฟังก์ชันเข้าถึงและแก้ไขข้อมูลดั้งเดิมผ่านทาง Memory Address โดยตรง"
      },
      {
        "key": "ค",
        "text": "ใช้หน่วยความจำใน Stack เพิ่มขึ้นตามขนาดของโครงสร้างข้อมูล"
      },
      {
        "key": "ง",
        "text": "ไม่สามารถใช้กับโครงสร้างข้อมูลขนาดใหญ่ได้"
      }
    ],
    "answer": "ข",
    "explanation": "Pass-by-Reference ส่ง Memory Address ไป ทำให้ฟังก์ชันแก้ไขตัวแปรต้นทางได้โดยตรง"
  },
  {
    "id": 91,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "หากต้องการส่ง Array ขนาด 100 Element เข้าไปในฟังก์ชัน ข้อใดเป็นวิธีที่มีประสิทธิภาพสูงสุดในเชิง Memory?",
    "options": [
      {
        "key": "ก",
        "text": "คัดลอก Array ทั้งหมดลงในตัวแปรใหม่"
      },
      {
        "key": "ข",
        "text": "ส่ง Pointer หรือ Address ของ Array ตัวแรกเข้าไป (Pass-by-Reference/Pointer)"
      },
      {
        "key": "ค",
        "text": "ประกาศ Array ใหม่ใน Heap แล้วคัดลอกทีละค่า"
      },
      {
        "key": "ง",
        "text": "แปลง Array ให้เป็น String ก่อนส่ง"
      }
    ],
    "answer": "ข",
    "explanation": "ส่งแบบ Pointer/Reference ประหยัดความจุและเวลาที่สุด เพราะไม่ต้องคัดลอกข้อมูลทั้ง 100 ชิ้น"
  },
  {
    "id": 92,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ฟังก์ชัน malloc() ในภาษา C ทำการจอง Memory ในส่วนใดของโครงสร้างหน่วยความจำ?",
    "options": [
      {
        "key": "ก",
        "text": "Stack"
      },
      {
        "key": "ข",
        "text": "Heap"
      },
      {
        "key": "ค",
        "text": "Code Segment (Text)"
      },
      {
        "key": "ง",
        "text": "Data Segment"
      }
    ],
    "answer": "ข",
    "explanation": "malloc() ทำหน้าที่จองหน่วยความจำในส่วน Heap แบบ Dynamic"
  },
  {
    "id": 93,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "เมื่อใช้ malloc() หรือ calloc() แล้ว ไม่ได้ทำการ free() Memory หลังจากเลิกใช้งาน จะเกิดปัญหาใด?",
    "options": [
      {
        "key": "ก",
        "text": "Buffer Overflow"
      },
      {
        "key": "ข",
        "text": "Memory Leak"
      },
      {
        "key": "ค",
        "text": "Segment Fault"
      },
      {
        "key": "ง",
        "text": "Deadlock"
      }
    ],
    "answer": "ข",
    "explanation": "การจอง Dynamic Memory แล้วไม่คืนคืนสู่ระบบ เรียกว่า Memory Leak"
  },
  {
    "id": 94,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดคือความแตกต่างระหว่าง calloc() และ malloc()?",
    "options": [
      {
        "key": "ก",
        "text": "calloc() ใช้จอง Stack แต่ malloc() ใช้จอง Heap"
      },
      {
        "key": "ข",
        "text": "calloc() จะเคลียร์ค่าใน Memory ให้เป็น 0 ทั้งหมดหลังจอง แต่ malloc() ไม่ทำการ เคลียร์ค่า (เป็น Garbage Value)"
      },
      {
        "key": "ค",
        "text": "malloc() สามารถขยายขนาด Memory ได้ แต่ calloc() ทำไม่ได้"
      },
      {
        "key": "ง",
        "text": "ทั้งคู่ไม่มีความแตกต่างกัน"
      }
    ],
    "answer": "ข",
    "explanation": "calloc() ต่างจาก malloc() ตรงที่มันจะทำการเคลียร์ Memory ทุก Byte ให้เป็นค่าศูนย์ (Zero-initialization)"
  },
  {
    "id": 95,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "พิจารณาฟังก์ชันก้าวหน้า (Tail Recursion) ข้อใดคือข้อดีหลักเมื่อเทียบกับ Recursion ทั่วไป?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้งาน Memory ใน Heap น้อยลง"
      },
      {
        "key": "ข",
        "text": "Compiler ยุคใหม่สามารถ Optimize ให้เปลี่ยนรูปแบบเป็น Iteration เพื่อป้องกัน Stack Overflow ได้ (Tail Call Optimization)"
      },
      {
        "key": "ค",
        "text": "สามารถรันได้โดยไม่ต้องมี Base Case"
      },
      {
        "key": "ง",
        "text": "คืนค่าผลลัพธ์ได้หลายค่าพร้อมกัน"
      }
    ],
    "answer": "ข",
    "explanation": "Tail Recursion เปิดโอกาสให้ Compiler ทำการ Optimize เป็นการวนลูป (Tail Call Optimization) ได้"
  },
  {
    "id": 96,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ตัวแปรชนิด extern ในภาษา C ใช้เพื่อวัตถุประสงค์ใด?",
    "options": [
      {
        "key": "ก",
        "text": "ประกาศตัวแปรที่เป็น Constant"
      },
      {
        "key": "ข",
        "text": "อ้างอิงถึงตัวแปร Global ที่ถูกประกาศไว้ในไฟล์ซอร์สโค้ดอื่น (Multi-file project)"
      },
      {
        "key": "ค",
        "text": "สร้างตัวแปรที่ใช้งานเฉพาะใน Thread ปัจจุบัน"
      },
      {
        "key": "ง",
        "text": "บังคับให้ตัวแปรเก็บใน CPU Register"
      }
    ],
    "answer": "ข",
    "explanation": "Keyword extern ประกาศอ้างอิงถึง Global variable ที่อยู่ในไฟล์อื่น"
  },
  {
    "id": 97,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "คำสั่ง return; (ไม่มีการส่งค่ากลับ) เหมาะสำหรับฟังก์ชันที่มี Return Type แบบใด?",
    "options": [
      {
        "key": "ก",
        "text": "int"
      },
      {
        "key": "ข",
        "text": "float"
      },
      {
        "key": "ค",
        "text": "void"
      },
      {
        "key": "ง",
        "text": "char*"
      }
    ],
    "answer": "ค",
    "explanation": "return; ไม่มีนิพจน์ส่งคืน ใช้หยุดการทำงานในฟังก์ชันประเภท void"
  },
  {
    "id": 98,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดคือผลลัพธ์ของการรันโปรแกรมนี้? #include <stdio.h> int fun() { static int count = 0; count++; return count; } int main() { printf(\"%d \", fun()); printf(\"%d \", fun()); return 0; }",
    "options": [
      {
        "key": "ก",
        "text": "1 1"
      },
      {
        "key": "ข",
        "text": "1 2"
      },
      {
        "key": "ค",
        "text": "2 2"
      },
      {
        "key": "ง",
        "text": "0 1"
      }
    ],
    "answer": "ข",
    "explanation": "count เป็น static variable: เรียกครั้งแรกได้ 1, เรียกครั้งที่สองขยับเป็น 2"
  },
  {
    "id": 99,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "การใช้ Overloading Function (ในภาษาอย่าง C++ หรือ Java) หมายถึงอะไร?",
    "options": [
      {
        "key": "ก",
        "text": "การเขียนฟังก์ชันใน Class ลูกเพื่อทับฟังก์ชันใน Class แม่"
      },
      {
        "key": "ข",
        "text": "การมีฟังก์ชันชื่อเดียวกันหลายฟังก์ชันใน Scope เดียวกัน โดยมี Parameter List ต่างกัน"
      },
      {
        "key": "ค",
        "text": "การเรียกใช้ฟังก์ชันซ้ำๆ จนเต็ม RAM"
      },
      {
        "key": "ง",
        "text": "การสร้างฟังก์ชันที่ไม่คืนค่าใดๆ"
      }
    ],
    "answer": "ข",
    "explanation": "Function Overloading คือการสร้างฟังก์ชันชื่อเดียวกัน แต่มี Parameter List ต่างกัน"
  },
  {
    "id": 100,
    "category": "Session 05: Functions, Scope & Memory Management (ข้อ 81-100)",
    "categoryKey": "cat5",
    "question": "ข้อใดเป็นแนวทางปฏิบัติที่ดี (Best Practice) เกี่ยวกับขอบเขตตัวแปร (Scope)?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้ Global Variable ให้ได้มากที่สุดเพื่อความสะดวกในการส่งค่า"
      },
      {
        "key": "ข",
        "text": "จำกัดขอบเขตตัวแปรให้แคบที่สุดเท่าที่เป็นไปได้ (Minimize Scope) เพื่อลด Side Effects"
      },
      {
        "key": "ค",
        "text": "ประกาศตัวแปรทุกตัวไว้ที่ต้นโปรแกรมเสมอ"
      },
      {
        "key": "ง",
        "text": "หลีกเลี่ยงการใช้ Local Variable Session 6: Data Structures & Basic Algorithms (ข้อ 101 - 120)"
      }
    ],
    "answer": "ข",
    "explanation": "หลักการแคบที่สุด (Principle of Least Privilege): ควรจำกัด Scope ของตัวแปรให้น้อยที่สุดเพื่อความปลอดภัย"
  },
  {
    "id": 101,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "การเข้าถึงข้อมูลตัวที่ i ใน Array ขนาด N มีความซับซ้อนทางเวลา (Time Complexity) เท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "O(1)"
      },
      {
        "key": "ข",
        "text": "O(n)"
      },
      {
        "key": "ค",
        "text": "O(log n)"
      },
      {
        "key": "ง",
        "text": "O(n^2)"
      }
    ],
    "answer": "ก",
    "explanation": "อาร์เรย์คำนวณตำแหน่งด้วย Offset: Address = Base + i * Size จึงเข้าถึงได้ด้วยความเร็ว constant time O(1)"
  },
  {
    "id": 102,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "โครงสร้างข้อมูล Array ต่างจาก Linked List ในเรื่อง Memory Allocation อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "Array จองพื้นที่ต่อเนื่องกันใน Memory (Contiguous) แต่ Linked List ไม่จำเป็นต้องต่อเนื่องกัน"
      },
      {
        "key": "ข",
        "text": "Linked List จองพื้นที่แบบ Static ส่วน Array จองแบบ Dynamic"
      },
      {
        "key": "ค",
        "text": "Array เก็บข้อมูลประเภทต่างกันได้ แต่ Linked List เก็บได้ชนิดเดียว"
      },
      {
        "key": "ง",
        "text": "ไม่มีความแตกต่างกันในเรื่อง Memory"
      }
    ],
    "answer": "ก",
    "explanation": "อาร์เรย์ใช้ Memory แบบต่อเนื่องกัน (Contiguous) ส่วน Linked List ใช้ Pointer เชื่อม Node ที่อยู่กระจัดกระจาย"
  },
  {
    "id": 103,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "กำหนดอาร์เรย์ int A[3][4]; ในภาษา C/C++ จำนวน Element ทั้งหมดและ indexing ตัวแรกคืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "12 elements, A[1][1]"
      },
      {
        "key": "ข",
        "text": "12 elements, A[0][0]"
      },
      {
        "key": "ค",
        "text": "7 elements, A[0][0]"
      },
      {
        "key": "ง",
        "text": "12 elements, A[3][4]"
      }
    ],
    "answer": "ข",
    "explanation": "3 x 4 = 12 elements และในภาษา C จะเริ่ม Index ด้วย [0][0]"
  },
  {
    "id": 104,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "อัลกอริทึมการจัดเรียงข้อมูลแบบใดที่มีประสิทธิภาพเฉลี่ยดีที่สุด (O(n log n))?",
    "options": [
      {
        "key": "ก",
        "text": "Bubble Sort"
      },
      {
        "key": "ข",
        "text": "Insertion Sort"
      },
      {
        "key": "ค",
        "text": "Selection Sort"
      },
      {
        "key": "ง",
        "text": "Quick Sort"
      }
    ],
    "answer": "ง",
    "explanation": "Quick Sort มีประสิทธิภาพเฉลี่ยเป็น O(n log n) ขณะที่ตัวเลือกอื่นเป็น O(n^2)"
  },
  {
    "id": 105,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "โครงสร้างข้อมูลแบบ Stack ทำงานตามหลักการใด?",
    "options": [
      {
        "key": "ก",
        "text": "FIFO (First In, First Out)"
      },
      {
        "key": "ข",
        "text": "LIFO (Last In, First Out)"
      },
      {
        "key": "ค",
        "text": "LILO (Last In, Last Out)"
      },
      {
        "key": "ง",
        "text": "Random Access"
      }
    ],
    "answer": "ข",
    "explanation": "Stack เป็นโครงสร้างแบบ เข้าทีหลัง-ออกก่อน (LIFO: Last In, First Out)"
  },
  {
    "id": 106,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "โครงสร้างข้อมูลแบบ Queue ทำงานตามหลักการใด?",
    "options": [
      {
        "key": "ก",
        "text": "FIFO (First In, First Out)"
      },
      {
        "key": "ข",
        "text": "LIFO (Last In, First Out)"
      },
      {
        "key": "ค",
        "text": "Priority-based เท่านั้น"
      },
      {
        "key": "ง",
        "text": "FILO (First In, Last Out)"
      }
    ],
    "answer": "ก",
    "explanation": "Queue เป็นโครงสร้างแบบ เข้าก่อน-ออกก่อน (FIFO: First In, First Out)"
  },
  {
    "id": 107,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "หากต้องการหาข้อมูลในอาร์เรย์ที่ ไม่ได้จัดเรียงลำดับ อัลกอริทึมใดที่สามารถใช้งานได้?",
    "options": [
      {
        "key": "ก",
        "text": "Binary Search"
      },
      {
        "key": "ข",
        "text": "Linear Search"
      },
      {
        "key": "ค",
        "text": "Interpolation Search"
      },
      {
        "key": "ง",
        "text": "Exponential Search"
      }
    ],
    "answer": "ข",
    "explanation": "Linear Search อ่านเช็คทีละตัวจากหน้าไปหลัง จึงใช้ได้กับอาร์เรย์ที่ยังไม่ได้เรียงลำดับ"
  },
  {
    "id": 108,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "พิจารณาโค้ดอาร์เรย์ภาษา C: int arr[] = {10, 20, 30, 40}; ค่าของ *(arr + 2) คือเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "10"
      },
      {
        "key": "ข",
        "text": "20"
      },
      {
        "key": "ค",
        "text": "30"
      },
      {
        "key": "ง",
        "text": "Address ของ arr"
      }
    ],
    "answer": "ค",
    "explanation": "Pointer Arithmetic: *(arr + 2) มีค่าเท่ากับ arr[2] ซึ่งคือ 30"
  },
  {
    "id": 109,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ข้อใดคือข้อเสียหลักของ Array เมื่อเปรียบเทียบกับ Linked List?",
    "options": [
      {
        "key": "ก",
        "text": "การเข้าถึงข้อมูลตามดัชนีทำได้ช้ากว่า"
      },
      {
        "key": "ข",
        "text": "ขนาดคงที่ (Fixed Size) ไม่สามารถขยายขนาดได้ทันทีขณะรัน และการแทรก/ลบข้อมูลตรงกลางทำได้ช้า"
      },
      {
        "key": "ค",
        "text": "เปลืองพื้นที่เก็บ Pointer"
      },
      {
        "key": "ง",
        "text": "ไม่รองรับข้อมูลประเภท Integer"
      }
    ],
    "answer": "ข",
    "explanation": "ข้อเสียหลักของ Array คือไม่สามารถขยายขนาดกะทันหันได้ และยุ่งยากเมื่อต้อง Insert/Delete ข้อมูลกลางแถว"
  },
  {
    "id": 110,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ข้อใดอธิบายสถานการณ์ \"Off-by-One Error\" ในการใช้อาร์เรย์ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "การลืมใส่ตัวแปรรับค่า"
      },
      {
        "key": "ข",
        "text": "การใช้อินเด็กซ์เกินขนาดอาร์เรย์ เช่น ประกาศขนาด 10 แต่อ่านอินเด็กซ์ที่ 10 (ซึ่งคือตัวที่ 11)"
      },
      {
        "key": "ค",
        "text": "การหารด้วยเลข 1"
      },
      {
        "key": "ง",
        "text": "การกำหนดค่าอาร์เรย์ผิดประเภท"
      }
    ],
    "answer": "ข",
    "explanation": "Off-by-One Error เกิดจากการนับ Index ผิดไป 1 ตำแหน่ง เช่น ลูปไปถึง Index เท่ากับขนาด Array"
  },
  {
    "id": 111,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ในการจัดเรียงข้อมูลแบบ Bubble Sort หากมีข้อมูล N ชุด ในกรณีแย่ที่สุด (Worst Case) ต้องทำการเปรียบเทียบข้อมูลประมาณกี่ครั้ง?",
    "options": [
      {
        "key": "ก",
        "text": "N ครั้ง"
      },
      {
        "key": "ข",
        "text": "N log N ครั้ง"
      },
      {
        "key": "ค",
        "text": "N(N-1)/2 ครั้ง"
      },
      {
        "key": "ง",
        "text": "2^N ครั้ง"
      }
    ],
    "answer": "ค",
    "explanation": "Bubble Sort Worst-case การเปรียบเทียบคือ N(N-1)/2 หรือ O(n^2)"
  },
  {
    "id": 112,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "Null Character ('\\0') มีบทบาทอย่างไรใน String ของภาษา C?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้แสดงจุดเริ่มต้นของ String"
      },
      {
        "key": "ข",
        "text": "ใช้เป็นตัวคั่นระว่างคำ"
      },
      {
        "key": "ค",
        "text": "ใช้เป็น Sentinel value ระบุจุดสิ้นสุดของ String ใน Character Array"
      },
      {
        "key": "ง",
        "text": "ไม่มีประโยชน์ เป็นเพียงตัวอักษรขยะ"
      }
    ],
    "answer": "ค",
    "explanation": "'\\0' เป็นสัญลักษณ์แสดงการสิ้นสุดของข้อความ (Null-terminator) ใน C-String"
  },
  {
    "id": 113,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "การประกาศ Structure (struct) ในภาษา C มีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "เพื่อรวมตัวแปรต่างชนิดข้อมูลกันให้อยู่ภายใต้ชื่อกลุ่มเดียวกัน"
      },
      {
        "key": "ข",
        "text": "เพื่อสร้างฟังก์ชันใหม่"
      },
      {
        "key": "ค",
        "text": "เพื่อเพิ่มความเร็วในการประมวลผลทางคณิตศาสตร์"
      },
      {
        "key": "ง",
        "text": "เพื่อใช้จอง Memory แบบ Dynamic"
      }
    ],
    "answer": "ก",
    "explanation": "struct เป็น Heterogeneous Data Structure รวมข้อมูลต่างประเภทเข้าด้วยกัน"
  },
  {
    "id": 114,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "การค้นหาแบบ Binary Search บนอาร์เรย์ขนาด 1,000 ชิ้น จะใช้จำนวนการเปรียบเทียบในกรณีแย่ที่สุด (Worst Case) ไม่เกินกี่ครั้ง?",
    "options": [
      {
        "key": "ก",
        "text": "10 ครั้ง"
      },
      {
        "key": "ข",
        "text": "500 ครั้ง"
      },
      {
        "key": "ค",
        "text": "1,000 ครั้ง"
      },
      {
        "key": "ง",
        "text": "100 ครั้ง"
      }
    ],
    "answer": "ก",
    "explanation": "log_2(1000) ≈ 9.96 ดังนั้น Binary Search จะเปรียบเทียบไม่เกิน 10 ครั้ง"
  },
  {
    "id": 115,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "พิจารณาการส่ง Array เข้าไปในฟังก์ชัน void process(int arr[]) เหตุใดการเปลี่ยนค่า arr[0] ภายในฟังก์ชันจึงส่งผลกระทบถึงอาร์เรย์ตัวจริงนอกฟังก์ชัน?",
    "options": [
      {
        "key": "ก",
        "text": "เพราะอาร์เรย์ถูกคัดลอกลง Global memory"
      },
      {
        "key": "ข",
        "text": "เพราะชื่อของ Array จะถูก Decay เป็น Pointer ชี้ไปยังตำแหน่งเริ่มต้นใน Memory (Pass-by-Pointer)"
      },
      {
        "key": "ค",
        "text": "เพราะฟังก์ชันทำการสั่ง Save ไฟล์โดยอัตโนมัติ"
      },
      {
        "key": "ง",
        "text": "เพราะเป็นคุณสมบัติเฉพาะของภาษา C++ เท่านั้น"
      }
    ],
    "answer": "ข",
    "explanation": "ชื่อของ Array จะถูกส่งไปแบบ Pointer (Array Decay) เสมอ ทำให้ฟังก์ชันอ้างอิงตำแหน่งจริงใน Memory"
  },
  {
    "id": 116,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ข้อใดต่อไปนี้จัดเป็นโครงสร้างข้อมูลแบบ Non-linear Data Structure?",
    "options": [
      {
        "key": "ก",
        "text": "Array"
      },
      {
        "key": "ข",
        "text": "Linked List"
      },
      {
        "key": "ค",
        "text": "Tree / Graph"
      },
      {
        "key": "ง",
        "text": "Queue"
      }
    ],
    "answer": "ค",
    "explanation": "Tree และ Graph เป็นโครงสร้างข้อมูลแบบไม่เป็นเส้นตรง (Non-linear)"
  },
  {
    "id": 117,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "การเรียงลำดับแบบ Selection Sort มีกลไกการทำงานอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "สลับข้อมูลคู่ที่ติดกันไปเรื่อยๆ"
      },
      {
        "key": "ข",
        "text": "ค้นหาข้อมูลที่น้อยที่สุดในส่วนที่ยังไม่ได้จัดเรียง แล้วนำมาสลับวางไว้ที่ตำแหน่งแรกของรอบนั้นๆ"
      },
      {
        "key": "ค",
        "text": "แบ่งข้อมูลออกเป็นสองส่วนเท่าๆ กันเสมอ"
      },
      {
        "key": "ง",
        "text": "แทรกข้อมูลลงในตำแหน่งที่ถูกต้องทีละตัว"
      }
    ],
    "answer": "ข",
    "explanation": "Selection Sort เลือกตัวที่น้อยที่สุดมาวางสลับไว้ตำแหน่งหน้าสุดของรอบนั้นๆ"
  },
  {
    "id": 118,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "string char str[10] = \"HELLO\"; จะใช้พื้นที่ Memory ทั้งหมดกี่ Bytes (สมมติ char ขนาด 1 byte)?",
    "options": [
      {
        "key": "ก",
        "text": "5 Bytes"
      },
      {
        "key": "ข",
        "text": "6 Bytes"
      },
      {
        "key": "ค",
        "text": "10 Bytes"
      },
      {
        "key": "ง",
        "text": "11 Bytes"
      }
    ],
    "answer": "ค",
    "explanation": "ประกาศขนาดไว้เท่าใด จะกินพื้นที่ Memory ตามขนาดนั้น: char str[10] ใช้ 10 Bytes"
  },
  {
    "id": 119,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "ถ้าทำ Push ข้อมูล 1, 2, 3 เข้าไปใน Stack ตามลำดับ แล้วสั่ง Pop ออก 2 ครั้ง ข้อมูลที่เหลือใน Stack คืออะไร?",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "2"
      },
      {
        "key": "ค",
        "text": "1"
      },
      {
        "key": "ง",
        "text": "สว่าง/ว่างเปล่า"
      }
    ],
    "answer": "ค",
    "explanation": "Push(1), Push(2), Push(3) -> Pop() เอา 3 ออก -> Pop() เอา 2 ออก เหลือ 1"
  },
  {
    "id": 120,
    "category": "Session 06: Data Structures & Basic Algorithms (ข้อ 101-120)",
    "categoryKey": "cat6",
    "question": "คำสั่ง sizeof(arr) / sizeof(arr[0]) ใช้ประโยชน์อย่างไรในภาษา C?",
    "options": [
      {
        "key": "ก",
        "text": "คำนวณหา Memory Address ของอาร์เรย์"
      },
      {
        "key": "ข",
        "text": "คำนวณหาจำนวน Element (ความยาว) ของ Static Array"
      },
      {
        "key": "ค",
        "text": "เคลียร์ค่าข้อมูลในอาร์เรย์"
      },
      {
        "key": "ง",
        "text": "ตรวจสอบว่าอาร์เรย์ว่างเปล่าหรือไม่"
      }
    ],
    "answer": "ข",
    "explanation": "sizeof(arr) (ขนาดทั้งหมด) หารด้วย sizeof(arr[0]) (ขนาด 1 element) ได้ผลลัพธ์เป็นจำนวน Element ใน Array"
  }
]
};

// Default pointer for backward compatibility
const quizQuestions = quizData.basic;
