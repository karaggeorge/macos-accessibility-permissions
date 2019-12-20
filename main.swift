import Foundation
import Cocoa

let arguments = Array(CommandLine.arguments.dropFirst(1))

if arguments.count == 0 {
    print(AXIsProcessTrustedWithOptions(["AXTrustedCheckOptionPrompt": false] as CFDictionary))
} else if arguments.first == "--ask" {
    print(AXIsProcessTrustedWithOptions(["AXTrustedCheckOptionPrompt": true] as CFDictionary))
} else {
    print("Unsupported argument")
    exit(1)
}
