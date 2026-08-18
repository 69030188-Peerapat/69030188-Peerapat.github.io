const quizQuestions = [
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
];
